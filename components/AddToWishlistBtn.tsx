"use client";

// *********************
// Role of the component: Button for adding and removing product to the wishlist on the single product page
// Name of the component: AddToWishlistBtn.tsx
// Developer: Kirill Dorkin
// Version: 1.0
// Component call: <AddToWishlistBtn product={product} slug={slug}  />
// Input parameters: AddToWishlistBtnProps interface
// Output: Two buttons with adding and removing from the wishlist functionality
// *********************

import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeartCrack } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

interface AddToWishlistBtnProps {
  product: Product;
  slug: string;
}

const AddToWishlistBtn = ({ product, slug }: AddToWishlistBtnProps) => {
  const { data: session, status } = useSession();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlistStore();
  const [isProductInWishlist, setIsProductInWishlist] = useState<boolean>();

  const addToWishlistFun = async () => {
    // getting user by email so I can get his user id
    if (session?.user?.email) {
      // sending fetch request to get user id because we will need it for saving wish item
      fetch(`http://localhost:3001/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) =>
          fetch("http://localhost:3001/api/wishlist", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId: product?.id, userId: data?.id }),
          })
            .then((response) => response.json())
            .then((data) => {
              addToWishlist({
                id: product?.id,
                title: product?.title,
                price: product?.price,
                image: product?.mainImage,
                slug: product?.slug,
                stockAvailabillity: product?.inStock,
              });
              toast.success("Товар добавлен в избранные");
            })
        );
    } else {
      toast.error("Вам необходимо войти в систему, чтобы добавить товар в избранные");
    }
  };

  const removeFromWishlistFun = async () => {
    if (session?.user?.email) {
      // sending fetch request to get user id because we will need to delete wish item
      fetch(`http://localhost:3001/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          return fetch(
            `http://localhost:3001/api/wishlist/${data?.id}/${product?.id}`,
            {
              method: "DELETE",
            }
          );
        })
        .then((response) => {
          removeFromWishlist(product?.id);
          toast.success("Товар удален из избранных");
        });
    }
  };

  const isInWishlist = async () => {
    // sending fetch request to get user id because we will need it for cheching whether the product is in wishlist
    if (session?.user?.email) {
      fetch(`http://localhost:3001/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          // checking is product in wishlist
          return fetch(
            `http://localhost:3001/api/wishlist/${data?.id}/${product?.id}`
          );
        })
        .then((response) => response.json())
        .then((data) => {
          if (data[0]?.id) {
            setIsProductInWishlist(() => true);
          } else {
            setIsProductInWishlist(() => false);
          }
        });
    }
  };

  useEffect(() => {
    isInWishlist();
  }, [session?.user?.email, wishlist]);

  return (
    <>
      {isProductInWishlist ? (
        <p
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={removeFromWishlistFun}
        >
          <FaHeartCrack className="text-xl text-custom-black" />
          <span className="text-lg">Удалить из избранных</span>
        </p>
      ) : (
        <p
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={addToWishlistFun}
        >
          <FaHeart className="text-xl text-custom-black" />
          <span className="text-lg">Добавить в избранные</span>
        </p>
      )}
    </>
  );
};

export default AddToWishlistBtn;
