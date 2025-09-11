import { useEffect, useState } from "react";
import { MenuAPI } from "./URL";

const useRestMenu = (id) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MenuAPI + id);
    const res = await data.json();

    console.log(res);

    setMenuInfo(res.data);
  };

  return menuInfo;
};

export default useRestMenu;
