import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import axios from "axios";
import { API_BACK, API_NEXT } from "../config";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const hey = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("item")
        ? JSON.parse(localStorage.getItem("item"))
        : [];
    }
    return [];
  };
  const [item, setItem] = useState(hey());
  const [currentProdcuts, setCurrentProdcuts] = useState([]);
  const [AllProdcuts, setAllProdcuts] = useState([]);
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => checkUserLogin(), []);
  useEffect(() => setTimeout(() => setError(null), 3000), [error]);
  const handelAllProdcuts = (prodcuts) => {
    setAllProdcuts(prodcuts);
  };
  const handelProdcuts = (prodcuts) => {
    setCurrentProdcuts(prodcuts);
  };
  const saveItems = (payload) => {
    setItem([...item, payload]);
  };
  const numberProdcutPerCartProdcut = (id, minus) => {
    let boughtItems = item.map((prodcut) => {
      if (prodcut.id === id) {
        if (minus) {
          return { ...prodcut, calc: prodcut.calc - 1 };
        }
        return { ...prodcut, calc: prodcut.calc + 1 };
      }
      return prodcut;
    });
    setItem(boughtItems);
  };
  const delteProdcutInCart = (id) => {
    if (id === "all") {
      setItem([]);
      localStorage.removeItem("item");
      return;
    }
    const newItems = item.filter((e) => e.id !== id);
    setItem(newItems);
  };
  const handelSearch = (query) => {
    const nameQuery = item.filter(
      (e) => e.title === e.title.include(query).toLowerCase()
    );
    setItem(nameQuery);
  };
  const login = async ({ identifier, password }) => {
    try {
      const res = await axios.post(`${API_NEXT}/api/login`, {
        identifier,
        password,
      });
      setUser(res.data.user);
      router.push("/products");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const registerAccount = async (data) => {
    try {
      const res = await axios.post(`${API_NEXT}/api/register`, data);
      setUser(res.data.user);
      router.push("/products");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const checkUserLogin = async (user) => {
    const res = await fetch(`${API_NEXT}/api/user`);
    const data = await res.json();
    console.log(data.user);
    if (res.ok) {
      setUser(data.user);
      router.push("/products");
    } else {
      setUser(null);
    }
  };
  const logout = async (user) => {
    const res = await fetch(`${API_NEXT}/api/logout`, {
      method: `POST`,
    });
    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };
  const sendCartToDashboard = async (cart, token) => {
    try {
      await axios.post(
        `${API_BACK}/items`,
        { items: cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setItem([]);
      localStorage.removeItem("item");
    } catch (error) {
      console.log(error);
    }
  };
  const delteFromDashboard = async (id, token) => {
    try {
      await axios.delete(`${API_BACK}/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        item,
        saveItems,
        numberProdcutPerCartProdcut,
        delteProdcutInCart,
        handelSearch,
        handelProdcuts,
        currentProdcuts,
        handelAllProdcuts,
        AllProdcuts,
        login,
        registerAccount,
        error,
        user,
        logout,
        sendCartToDashboard,
        delteFromDashboard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export const useGlobalContext = () => {
  return useContext(AuthContext);
};
