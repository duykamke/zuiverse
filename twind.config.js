/** @type {import('twind').Configuration} */
export default {
    darkMode: "class",
    mode: "silent",
    preflight: (preflight) => ({
        ...preflight,
        "@import":
            `url(//fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300,100italic,100)`,
        body: {
            "@apply": "min-h-screen bg-eerie-700 text-alice-100 antialiased",
            cursor: "url('pointers/heart.png'), default",
            h1: {
                "@apply": "text-[48px] font-black leading-[56.26px]",
            },
            h2: {
                "@apply": "text-[32px] font-black leading-[37.5px]",
            },
            h3: {
                "@apply": "text-[26px] font-black leading-[30.47px]",
            },
            h4: {
                "@apply": "text-[17px] font-black leading-[19.92px]",
            },
            h5: {
                "@apply": "text-[13px] font-bold leading-[15.23px]",
            },
            p: {
                "@apply": "text-[16px] font-normal leading-[18px]",
            },
        },
    }),
    theme: {
        extend: {
            screens: {
                standalone: { raw: '(display-mode:standalone)' },
            },
            fontFamily: {
                sans: "Roboto, sans-serif",
            },
            colors: {
                yellow: {
                    100: "#F6E8A2",
                    300: "#F3DF7C",
                    500: "#EFD657",
                    700: "#ECCD32",
                    900: "#E0BE15",
                },
                blue: {
                    100: "#99E6FF",
                    300: "#70DBFF",
                    500: "#47D1FF",
                    700: "#1FC7FF",
                    900: "#00B8F5",
                },
                eerie: {
                    100: "#474747",
                    300: "#3D3D3D",
                    500: "#333333",
                    600: "#262626",
                    700: "#1F1F1F",
                    800: "#141414",
                    900: "#0A0A0A",
                },
                alice: {
                    100: "#EAF6FF",
                    300: "#C2E4FF",
                    500: "#99D3FF",
                },
                confirm: {
                    300: "#79D99F",
                    500: "#61BE87",
                    700: "#169D77",
                },
                warning: {
                    300: "#FCB26D",
                    500: "#F49F50",
                    700: "#E97331",
                },
                error: {
                    300: "#F87777",
                    500: "#EF5A5A",
                    700: "#D64545",
                },
            },
            transitionProperty: {
                width: "width"
            },
            animation: {
                type: "type 3s ease-out 0.8s infinite alternate both",
                "type-text": "type-text 3s ease-out 0.8s infinite alternate both",
                "gradient-x": "gradient-x 15s ease infinite",
                "gradient-y": "gradient-y 15s ease infinite",
                "gradient-xy": "gradient-xy 15s ease infinite",
            },
            keyframes: {
                cursor: {
                    "0%, 40%": {
                        opacity: 1,
                    },
                    "60%, 100%": {
                        opacity: 0,
                    },
                },
                type: {
                    "0%": { transform: "translateX(0ch)" },
                    "5%, 10%": { transform: "translateX(1ch)" },
                    "15%, 20%": { transform: "translateX(2ch)" },
                    "25%, 30%": { transform: "translateX(3ch)" },
                    "35%, 40%": { transform: "translateX(4ch)" },
                    "45%, 50%": { transform: "translateX(5ch)" },
                    "55%, 60%": { transform: "translateX(6ch)" },
                    "65%, 70%": { transform: "translateX(7ch)" },
                    "75%, 80%": { transform: "translateX(8ch)" },
                    "85%, 100%": { transform: "translateX(9ch)" },
                },
                "type-text": {
                    "0%": { width: "0ch" },
                    "5%, 10%": { width: "1ch" },
                    "15%, 20%": { width: "2ch" },
                    "25%, 30%": { width: "3ch" },
                    "35%, 40%": { width: "4ch" },
                    "45%, 50%": { width: "5ch" },
                    "55%, 60%": { width: "6ch" },
                    "65%, 70%": { width: "7ch" },
                    "75%, 80%": { width: "8ch" },
                    "85%, 100%": { width: "9ch" },
                },
                "gradient-y": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "center top",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center center",
                    },
                },
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 100%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "100% 200%",
                        "background-position": "right center",
                    },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
}