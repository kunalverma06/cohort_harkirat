import Image from "next/image";

export interface Video {
    id: number; // Added an id field
    title: string;
    image: string;
    thumb: string;
    Channelname: string;
    views: string;
    duration: string;
    timestamp: string;
    link: string;
    subscriber:string
}


export const Videos: Video[] = [
    {
        id: 1,
        title: "Most Baddess edit of the spiderman",
        image: "/image_1.jpg",
        thumb: "/image_1.jpg",
        Channelname: "Wind_reaper",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://www.youtube.com/watch?v=NtNYwMSpIBg"
    ,
subscriber:"1.2M"},
    {
        id: 2,
        title: "I Researched the Job Market after AI",
        image: "/Logo_image_2.jpeg ",
        thumb: "/image_2.jpg",
        Channelname: "Harkirat singh",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://youtu.be/QrWyUWW_xUo?si=d8RqBkTichdtlezn",
        subscriber:"1.2M"
    },
    {
        id: 3,
        title: "ISHQ HAI - Aditya Rikhari",
        image: "/Logo_image_3.jpeg",
        thumb: "/image_3.jpg",
        Channelname: "   Aditya Rikhari",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://youtu.be/ovnXKFPXBVo?si=Usb5a3ZkLCCYLHaQ",
        subscriber:"1.2M"
    },
    {
        id: 4,
        title: "Maahi",
        image: "/Logo_image_4.jpeg",
        thumb: "/image_4.jpg",
        Channelname: "FARHAN KHAN MUSIC",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://youtu.be/ovnXKFPXBVo?si=Usb5a3ZkLCCYLHaQ",
        subscriber:"1.2M"
    },
    {
        id: 5,
        title: "Most Baddess edit of the spiderman",
        image: "/Logo_image_5.jpeg",
        thumb: "/image_5.jpg",
        Channelname: "BeastboyShub",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://youtu.be/ovnXKFPXBVo?si=Usb5a3ZkLCCYLHaQ",
        subscriber:"1.2M"
    },
    {
        id: 6,
        title: "BELLA - ZIMEDARI | PROD BY ABHI KESLA | MUSIC VIDEO",
        image: "/Logo_image_6.jpeg",
        thumb: "/image_6.jpg",
        Channelname: "BellaOfficials",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://youtu.be/ovnXKFPXBVo?si=Usb5a3ZkLCCYLHaQ",
        subscriber:"1.2M"
    },
    {
        id: 7,
        title: "Most Baddess edit of the spiderman",
        image: "/image_1.jpg",
        thumb: "/image_1.jpg",
        Channelname: "Wind_reaper",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://youtu.be/ovnXKFPXBVo?si=Usb5a3ZkLCCYLHaQ",
        subscriber:"1.2M"
    },
    {
        id: 8,
        title: "Most Baddess edit of the spiderman",
        image: "/image_1.jpg",
        thumb: "/image_1.jpg",
        Channelname: "Wind_reaper",
        views: "2.3M",
        duration: "1 week ago",
        timestamp: "4 hours ago",
        link:"https://youtu.be/ovnXKFPXBVo?si=Usb5a3ZkLCCYLHaQ",
        subscriber:"1.2M"
    },
];
