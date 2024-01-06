import CardMovie from "@/Components/CardMovie";
import FeaturedMovie from "@/Components/FeaturedMovie";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import React from "react";
import Flickity from "react-flickity-component";

export default function Dashboard({ auth }) {
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
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            slug="batman"
                            name="The Batman"
                            category="Action"
                            thumbnail="/images/featured-1.png"
                            rating={4}
                            key={i}
                        />
                    ))}
                </Flickity>
            </div>
            {/* <!-- /Featured --> */}

            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <CardMovie
                            slug="batman"
                            name="The Batman"
                            category="Action"
                            thumbnail="/images/featured-1.png"
                            key={i}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
