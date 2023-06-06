const womensData = [
    {
      id: 0,
      title:'Black Jeans',
      price:'Rs 2200',
      image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/ValentinaHighRiseFlareJeans-Black_MER_bafc86c3-019a-43b3-a190-91de8c520470_360x.jpg?v=1676074237',
      rating:4,
        category:'Jeans'
    },
    {
      id: 1,
      title:'Basic stretch wide leg jeans',
      image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/01-31-23Studio4_CE_CM_10-25-48_7_FNN24185FB06C_MediumWash_6353_EH_360x.jpg?v=1675300878',
      price: "Rs 1900",
      rating: 3,
      category:'Jeans'
    },
    {
      id: 2,
      title:'Skinny black wash jeans',
      image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/09-15-22Studio2_CE_RL_15-19-48_30_FN22804FT30_BlackWash_P_1128_EH_468x.jpg?v=1663349019',
      price: 'Rs 2400',
      rating:4,  
      category:'Jeans'
    },
  
    {
        id: 3,
        title:'Black Jumpsuit',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/06-13-22Studio5_CE_AC_11-09-11_6_JP2293FN_Black_P_0362_KS_360x.jpg?v=1655168173',
        price: 'Rs 3800',
        rating:5, 
        category:'Jumpsuits and Joggers'
      },
      {
        id: 4,
        titile:'Stripe Jumpsuit',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-04-21Studio3_DM_TB_15-24-19_62_8282J_Navy_0865_JK_360x.jpg?v=1612485971',
        price: "Rs 2750",
        rating: 3,
        category:'Jumpsuits and Joggers'

      },
      {
        id: 5,
        title:'Midi dress',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/09-12-22Studio3_SN_AC_14-51-30_39_SBD340_Pink_2635_ES_360x.jpg?v=1663093943',
        price: 30,
        rating: 3,
        category:'dresses'
      },
      {
        id: 6,
        title:'summer maxi dress',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/04-19-23Studio8_KT_AP_15-12-21_60_FD10514_Greencombo_0967_DG_360x.jpg?v=1682100868',
        price: 'Rs 2000',
        rating: 3,
        category:'dresses'
      },
      {
        id: 7,
        title:'Black thank you tshirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/05-11-21Studio4_CE_ON_09-57-33_6_D2890_Black_0216_RA_360x.jpg?v=1658794534',
        price:  "Rs 3000",
        rating:5,  
        category:'Tshirts and Tops'
      },
      {
        id: 8,
        title:'Reign Maxi dress',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/04-07-22Studio5_ME_KP_10-55-23_17_DR2234_MultiColor_0203_EH_360x.jpg?v=1649792354',
        price: 'Rs 4500',
        rating:5,  
        category:'dresses'
      },
      {
        id: 9,
        title:'Ribbed midi dress',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/01-13-23Studio5_TH_R_13-51-19_36_HD18634_Black_13031_ES_360x.jpg?v=1674151893',
        price: 'Rs 5000',
        rating:5,  
        category:'dresses'
      },
      {
        id: 10,
        title:'Red terry jogger',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/07-07-21Studio3_MS_CP_13-44-16_44_65776_Red_6965_WG_360x.jpg?v=1625863880',
        price: 'Rs 2300',
        rating: 2,
        category:'Jumpsuits and Joggers'
      },
      {
        id: 11,
        title:'Terry jogger',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/07-20-21Studio1_CE_KG_13-56-28_25_65776_Olive_R_5623_WG_360x.jpg?v=1626896485',
        price: 'Rs 2300',
        rating: 3,
        category:'Jumpsuits and Joggers'
      },
      {
        id: 12,
        title:'Velour short set',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/07-01-21Studio4_RM_TB_15-25-41_60_7021_Chocolate_0712_RG_360x.jpg?v=1665076766',
        price: "Rs 3000",
        rating:5,  
        category:' '
      },
      {
        id: 13,
        title:'Navy joggers',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/06-23-20Studio4_CE_MJ_10-33-13_3_PA130_Navy_5428_JK_360x.jpg?v=1592942377',
        price: 'Rs 2000',
        rating: 3,
        category:'Jumpsuits and Joggers'
      },
      {
        id: 14,
        title:'Maxi skirt- white',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/01-18-23Studio3_TH_IM_10-30-50_9_HS133_White_1546_JB_JB_360x.jpg?v=1674498182',
        price: 30,
        rating:4,  
        category:'Skirts'
      },
      {
        id: 15,
        title:'Mini skirt-black',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/01-19-23Studio4_DJ_RD_11-30-56_21_S500840FP_Black_5910_SG_360x.jpg?v=1675102116',
        price: 'Rs 1900',
        rating: 3,
        category:'Skirts'
      },
      {
        id: 16,
        title:'Road Champion Graphic Tee',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-17-23Studio1_KS_BD_11-27-38_35_FNBCRASHINGTEE_Taupe_0452_EH_360x.jpg?v=1677281246',
        price: 'Rs 1900',
        rating: 3,
        category:'Tshirts and Tops'
      },
      {
        id: 17,
        title:'printed Tee',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/files/05-25-23_TA_BD_10-32-39_7_23014928_Aqua_0227_CM_360x.jpg?v=1685574761',
        price: 'Rs 1900',
        rating: 3,
        category:'Tshirts and Tops'
      },
      {
        id: 18,
        title:'Floral Tops',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-17-23Studio3_HY_KT_10-19-26_6_PT42217K_Ivorycombo_3277_MR_360x.jpg?v=1677112987',
        price: 'Rs 1200',
        rating: 3,
        category:'Tshirts and Tops'
      },
      {
        id: 19,
        title:'Party Dates Blouse Top',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-17-23Studio3_HY_KT_10-24-07_7_BT2135S_Pinkcombo_3289_MR_360x.jpg?v=16771130127',
        price: 'Rs 3300',
        rating: 4,
        category:'Tshirts and Tops'
      },
      {
        id: 20,
        title:'Cargo  Mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/files/05-03-23Studio2_KJ_RL_15-10-43_39_K1222_Grey_11820_DQ_360x.jpg?v=1683659449',
        price: 'Rs 4300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 21,
        title:'Pink mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-16-23Studio3_TA_CG_13-42-07_42_BS08211_Pink_2849_MP_360x.jpg?v=1677107469',
        price: 'Rs 1300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 22,
        title:'Melanie mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/BuyMeADrinkSkirt-Black_MER_360x.jpg?v=1666810174',
        price: 'Rs 1800',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 23,
        title:'Faux Leather skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/CarlibellFauxLeatherSkirt-Black_MER_360x.jpg?v=1651792614',
        price: 'Rs 3300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 24,
        title:'Cargo  Mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/files/05-03-23Studio2_KJ_RL_15-10-43_39_K1222_Grey_11820_DQ_360x.jpg?v=1683659449',
        price: 'Rs 4300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 25,
        title:'Pink mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-16-23Studio3_TA_CG_13-42-07_42_BS08211_Pink_2849_MP_360x.jpg?v=1677107469',
        price: 'Rs 1300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 26,
        title:'Melanie mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/BuyMeADrinkSkirt-Black_MER_360x.jpg?v=1666810174',
        price: 'Rs 1800',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 27,
        title:'Faux Leather skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/CarlibellFauxLeatherSkirt-Black_MER_360x.jpg?v=1651792614',
        price: 'Rs 3300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 28,
        title:'Cargo  Mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/files/05-03-23Studio2_KJ_RL_15-10-43_39_K1222_Grey_11820_DQ_360x.jpg?v=1683659449',
        price: 'Rs 4300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 29,
        title:'Pink mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-16-23Studio3_TA_CG_13-42-07_42_BS08211_Pink_2849_MP_360x.jpg?v=1677107469',
        price: 'Rs 1300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 30,
        title:'Melanie mini skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/BuyMeADrinkSkirt-Black_MER_360x.jpg?v=1666810174',
        price: 'Rs 1800',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 31,
        title:'Faux Leather skirt',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/CarlibellFauxLeatherSkirt-Black_MER_360x.jpg?v=1651792614',
        price: 'Rs 3300',
        rating: 4,
        category:'Skirts'
      },
      {
        id: 32,
        title:'The Glass Slipper - Transparent',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/02-18-20_Studio_6_MA_OM_12-45-55_WIREFRAMES_FOR_BUYERS_1101_RG_DM_360x.jpg?v=1658861454',
        price: 'Rs 3300',
        rating: 4,
        category:'Shoes'
      },
      {
        id: 33,
        title:'Big moves slides-blush',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/10-02-20Studio4_AP_15-28-49_12_FANZZY_Blush_52975_RA_360x.jpg?v=1601681503',
        price: 'Rs 1200',
        rating: 3,
        category:'Shoes'
      }, {
        id: 34,
        title:'Plot twist heel-black',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/Plot_Twist_Heel_-_Black_JK_360x.jpg?v=1677732222',
        price: 'Rs 2200',
        rating: 3,
        category:'Shoes'
      }, {
        id: 35,
        title:'Joy ride slides-pink',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/04-18-23Studio8_CB_RS_10-41AM_23_BUMBLY01_Pink_0668_MP_360x.jpg?v=1682026093',
        price: 'Rs 900',
        rating: 2,
        category:'Shoes'
      }, {
        id: 36,
        title:'Flat sandals-rose gold',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/05-26-20Studio3_MA_CP_14-50-57_91_VIVI01_RoseGold_0214_RG_360x.jpg?v=1590596900',
        price: 'Rs 5300',
        rating: 4,
        category:'Shoes'
      }, {
        id: 37,
        title:'Heeled Sandals',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/CherishMeHeeledSandals-Nude_MER_360x.jpg?v=1588727406',
        price: 'Rs 2300',
        rating: 4,
        category:'Shoes'
      }, {
        id: 38,
        title:'Heeled mules-pink',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/01-07-22Studio6_RT_13-52-31_43_SIRI_Pink_0018_EH_360x.jpg?v=1641856801',
        price: 'Rs 5300',
        rating: 4,
        category:'Shoes'
      }, {
        id: 39,
        title:'Flat sandals',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/07-23-20Studio5_DD_KJ_15-53-56_64_BRIGHTLY_Nude_5471_WG_360x.jpg?v=1595628273',
        price: 'Rs 5300',
        rating: 4,
        category:'Shoes'
      },
      {
        id: 40,
        title:'Skinny Jeans',
        image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/09-15-22Studio2_CE_RL_11-01-03_5_FN22804FT27_LightWash_P_0827_ES_360x.jpg?v=1663287884',
        price: 'Rs 2300',
        rating: 3,
        category:'Jeans'
      },

  ];
export default womensData;