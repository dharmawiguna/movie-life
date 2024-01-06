import CardMovie from "@/Components/CardMovie";
import FeaturedMovie from "@/Components/FeaturedMovie";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import Flickity from "react-flickity-component";

export default function Dashboard({ auth, featuredMovie, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            {/* <!-- Featured --> */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {/*  Movie Thumbnail */}
                    {featuredMovie?.map((movie, i) => (
                        <FeaturedMovie
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                            rating={movie.rating}
                            key={i}
                        />
                    ))}
                </Flickity>
            </div>
            {/* <!-- /Featured --> */}

            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-5">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {movies?.map((movie) => (
                        <CardMovie
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                            key={movie.id}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
