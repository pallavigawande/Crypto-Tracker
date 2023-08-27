import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import { MenuItem, Select } from "@mui/material";
import "./styles.css";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  }
  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        value={crypto1}
        onChange={(event) => handleCoinChange(event, false)}
        sx={styles}
        lable="crypto 1"
      >
        {allCoins.map((coin, i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        value={crypto2}
        onChange={(event) => handleCoinChange(event, true)}
        sx={styles}
        lable="crypto 2"
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
