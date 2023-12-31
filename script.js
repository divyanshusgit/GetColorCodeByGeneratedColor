const rgbColorMap = {
    'aliceblue': 'rgb(240, 248, 255)',
    'antiquewhite': 'rgb(250, 235, 215)',
    'aqua': 'rgb(0, 255, 255)',
    'aquamarine': 'rgb(127, 255, 212)',
    'azure': 'rgb(240, 255, 255)',
    'beige': 'rgb(245, 245, 220)',
    'bisque': 'rgb(255, 228, 196)',
    'black': 'rgb(0, 0, 0)',
    'blanchedalmond': 'rgb(255, 235, 205)',
    'blue': 'rgb(0, 0, 255)',
    'blueviolet': 'rgb(138, 43, 226)',
    'brown': 'rgb(165, 42, 42)',
    'burlywood': 'rgb(222, 184, 135)',
    'cadetblue': 'rgb(95, 158, 160)',
    'chartreuse': 'rgb(127, 255, 0)',
    'chocolate': 'rgb(210, 105, 30)',
    'coral': 'rgb(255, 127, 80)',
    'cornflowerblue': 'rgb(100, 149, 237)',
    'cornsilk': 'rgb(255, 248, 220)',
    'crimson': 'rgb(220, 20, 60)',
    'cyan': 'rgb(0, 255, 255)',
    'darkblue': 'rgb(0, 0, 139)',
    'darkcyan': 'rgb(0, 139, 139)',
    'darkgoldenrod': 'rgb(184, 134, 11)',
    'darkgray': 'rgb(169, 169, 169)',
    'darkgreen': 'rgb(0, 100, 0)',
    'darkkhaki': 'rgb(189, 183, 107)',
    'darkmagenta': 'rgb(139, 0, 139)',
    'darkolivegreen': 'rgb(85, 107, 47)',
    'darkorange': 'rgb(255, 140, 0)',
    'darkorchid': 'rgb(153, 50, 204)',
    'darkred': 'rgb(139, 0, 0)',
    'darksalmon': 'rgb(233, 150, 122)',
    'darkseagreen': 'rgb(143, 188, 139)',
    'darkslateblue': 'rgb(72, 61, 139)',
    'darkslategray': 'rgb(47, 79, 79)',
    'darkturquoise': 'rgb(0, 206, 209)',
    'darkviolet': 'rgb(148, 0, 211)',
    'deeppink': 'rgb(255, 20, 147)',
    'deepskyblue': 'rgb(0, 191, 255)',
    'dimgray': 'rgb(105, 105, 105)',
    'dodgerblue': 'rgb(30, 144, 255)',
    'firebrick': 'rgb(178, 34, 34)',
    'floralwhite': 'rgb(255, 250, 240)',
    'forestgreen': 'rgb(34, 139, 34)',
    'fuchsia': 'rgb(255, 0, 255)',
    'gainsboro': 'rgb(220, 220, 220)',
    'ghostwhite': 'rgb(248, 248, 255)',
    'gold': 'rgb(255, 215, 0)',
    'goldenrod': 'rgb(218, 165, 32)',
    'gray': 'rgb(128, 128, 128)',
    'green': 'rgb(0, 128, 0)',
    'greenyellow': 'rgb(173, 255, 47)',
    'honeydew': 'rgb(240, 255, 240)',
    'hotpink': 'rgb(255, 105, 180)',
    'indianred': 'rgb(205, 92, 92)',
    'indigo': 'rgb(75, 0, 130)',
    'ivory': 'rgb(255, 255, 240)',
    'khaki': 'rgb(240, 230, 140)',
    'lavender': 'rgb(230, 230, 250)',
    'lavenderblush': 'rgb(255, 240, 245)',
    'lawngreen': 'rgb(124, 252, 0)',
    'lemonchiffon': 'rgb(255, 250, 205)',
    'lightblue': 'rgb(173, 216, 230)',
    'lightcoral': 'rgb(240, 128, 128)',
    'lightcyan': 'rgb(224, 255, 255)',
    'lightgoldenrodyellow': 'rgb(250, 250, 210)',
    'lightgray': 'rgb(211, 211, 211)',
    'lightgreen': 'rgb(144, 238, 144)',
    'lightpink': 'rgb(255, 182, 193)',
    'lightsalmon': 'rgb(255, 160, 122)',
    'lightseagreen': 'rgb(32, 178, 170)',
    'lightskyblue': 'rgb(135, 206, 250)',
    'lightslategray': 'rgb(119, 136, 153)',
    'lightsteelblue': 'rgb(176, 196, 222)',
    'lightyellow': 'rgb(255, 255, 224)',
    'lime': 'rgb(0, 255, 0)',
    'limegreen': 'rgb(50, 205, 50)',
    'linen': 'rgb(250, 240, 230)',
    'magenta': 'rgb(255, 0, 255)',
    'maroon': 'rgb(128, 0, 0)',
    'mediumaquamarine': 'rgb(102, 205, 170)',
    'mediumblue': 'rgb(0, 0, 205)',
    'mediumorchid': 'rgb(186, 85, 211)',
    'mediumpurple': 'rgb(147, 112, 219)',
    'mediumseagreen': 'rgb(60, 179, 113)',
    'mediumslateblue': 'rgb(123, 104, 238)',
    'mediumspringgreen': 'rgb(0, 250, 154)',
    'mediumturquoise': 'rgb(72, 209, 204)',
    'mediumvioletred': 'rgb(199, 21, 133)',
    'midnightblue': 'rgb(25, 25, 112)',
    'mintcream': 'rgb(245, 255, 250)',
    'mistyrose': 'rgb(255, 228, 225)',
    'moccasin': 'rgb(255, 228, 181)',
    'navajowhite': 'rgb(255, 222, 173)',
    'navy': 'rgb(0, 0, 128)',
    'oldlace': 'rgb(253, 245, 230)',
    'olive': 'rgb(128, 128, 0)',
    'olivedrab': 'rgb(107, 142, 35)',
    'orange': 'rgb(255, 165, 0)',
    'orangered': 'rgb(255, 69, 0)',
    'orchid': 'rgb(218, 112, 214)',
    'palegoldenrod': 'rgb(238, 232, 170)',
    'palegreen': 'rgb(152, 251, 152)',
    'paleturquoise': 'rgb(175, 238, 238)',
    'palevioletred': 'rgb(219, 112, 147)',
    'papayawhip': 'rgb(255, 239, 213)',
    'peachpuff': 'rgb(255, 218, 185)',
    'peru': 'rgb(205, 133, 63)',
    'pink': 'rgb(255, 192, 203)',
    'plum': 'rgb(221, 160, 221)',
    'powderblue': 'rgb(176, 224, 230)',
    'purple': 'rgb(128, 0, 128)',
    'rebeccapurple': 'rgb(102, 51, 153)',
    'red': 'rgb(255, 0, 0)',
    'rosybrown': 'rgb(188, 143, 143)',
    'royalblue': 'rgb(65, 105, 225)',
    'saddlebrown': 'rgb(139, 69, 19)',
    'salmon': 'rgb(250, 128, 114)',
    'sandybrown': 'rgb(244, 164, 96)',
    'seagreen': 'rgb(46, 139, 87)',
    'seashell': 'rgb(255, 245, 238)',
    'sienna': 'rgb(160, 82, 45)',
    'silver': 'rgb(192, 192, 192)',
    'skyblue': 'rgb(135, 206, 235)',
    'slateblue': 'rgb(106, 90, 205)',
    'slategray': 'rgb(112, 128, 144)',
    'snow': 'rgb(255, 250, 250)',
    'springgreen': 'rgb(0, 255, 127)',
    'steelblue': 'rgb(70, 130, 180)',
    'tan': 'rgb(210, 180, 140)',
    'teal': 'rgb(0, 128, 128)',
    'thistle': 'rgb(216, 191, 216)',
    'tomato': 'rgb(255, 99, 71)',
    'turquoise': 'rgb(64, 224, 208)',
    'violet': 'rgb(238, 130, 238)',
    'wheat': 'rgb(245, 222, 179)',
    'white': 'rgb(255, 255, 255)',
    'whitesmoke': 'rgb(245, 245, 245)',
    'yellow': 'rgb(255, 255, 0)',
    'yellowgreen': 'rgb(154, 205, 50)'
};

const hexColorMap = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
};

const hslColorMap = {
    "aliceblue": "hsl(208, 100%, 97%)",
    "antiquewhite": "hsl(34, 77%, 91%)",
    "aqua": "hsl(180, 100%, 50%)",
    "aquamarine": "hsl(160, 100%, 75%)",
    "azure": "hsl(180, 100%, 97%)",
    "beige": "hsl(60, 55%, 91%)",
    "bisque": "hsl(33, 100%, 88%)",
    "black": "hsl(0, 0%, 0%)",
    "blanchedalmond": "hsl(36, 100%, 90%)",
    "blue": "hsl(240, 100%, 50%)",
    "blueviolet": "hsl(271, 76%, 53%)",
    "brown": "hsl(0, 59%, 41%)",
    "burlywood": "hsl(34, 57%, 70%)",
    "cadetblue": "hsl(182, 24%, 50%)",
    "chartreuse": "hsl(90, 100%, 50%)",
    "chocolate": "hsl(25, 75%, 47%)",
    "coral": "hsl(16, 100%, 66%)",
    "cornflowerblue": "hsl(219, 79%, 66%)",
    "cornsilk": "hsl(48, 100%, 93%)",
    "crimson": "hsl(348, 83%, 47%)",
    "cyan": "hsl(180, 100%, 50%)",
    "darkblue": "hsl(240, 100%, 27%)",
    "darkcyan": "hsl(180, 100%, 27%)",
    "darkgoldenrod": "hsl(43, 89%, 38%)",
    "darkgray": "hsl(0, 0%, 66%)",
    "darkgreen": "hsl(120, 100%, 20%)",
    "darkkhaki": "hsl(56, 38%, 58%)",
    "darkmagenta": "hsl(300, 100%, 27%)",
    "darkolivegreen": "hsl(82, 39%, 30%)",
    "darkorange": "hsl(33, 100%, 50%)",
    "darkorchid": "hsl(280, 61%, 50%)",
    "darkred": "hsl(0, 100%, 27%)",
    "darksalmon": "hsl(15, 72%, 70%)",
    "darkseagreen": "hsl(120, 33%, 65%)",
    "darkslateblue": "hsl(248, 39%, 39%)",
    "darkslategray": "hsl(180, 33%, 39%)",
    "darkturquoise": "hsl(181, 100%, 41%)",
    "darkviolet": "hsl(282, 100%, 41%)",
    "deeppink": "hsl(328, 100%, 54%)",
    "deepskyblue": "hsl(195, 100%, 50%)",
    "dimgray": "hsl(0, 0%, 41%)",
    "dodgerblue": "hsl(210, 100%, 56%)",
    "firebrick": "hsl(0, 68%, 42%)",
    "floralwhite": "hsl(40, 100%, 97%)",
    "forestgreen": "hsl(120, 61%, 34%)",
    "fuchsia": "hsl(300, 100%, 50%)",
    "gainsboro": "hsl(0, 0%, 86%)",
    "ghostwhite": "hsl(240, 100%, 97%)",
    "gold": "hsl(51, 100%, 50%)",
    "goldenrod": "hsl(43, 74%, 49%)",
    "gray": "hsl(0, 0%, 50%)",
    "green": "hsl(120, 100%, 25%)",
    "greenyellow": "hsl(84, 100%, 59%)",
    "honeydew": "hsl(120, 100%, 97%)",
    "hotpink": "hsl(330, 100%, 71%)",
    "indianred": "hsl(0, 53%, 58%)",
    "indigo": "hsl(275, 100%, 25%)",
    "ivory": "hsl(60, 100%, 97%)",
    "khaki": "hsl(54, 38%, 75%)",
    "lavender": "hsl(240, 67%, 94%)",
    "lavenderblush": "hsl(340, 100%, 97%)",
    "lawngreen": "hsl(120, 100%, 50%)",
    "lemonchiffon": "hsl(56, 100%, 90%)",
    "lightblue": "hsl(195, 53%, 79%)",
    "lightcoral": "hsl(0, 79%, 72%)",
    "lightcyan": "hsl(180, 100%, 94%)",
    "lightgoldenrodyellow": "hsl(50, 100%, 90%)",
    "lightgray": "hsl(0, 0%, 75%)",
    "lightgreen": "hsl(120, 73%, 75%)",
    "lightpink": "hsl(351, 100%, 86%)",
    "lightsalmon": "hsl(17, 100%, 74%)",
    "lightseagreen": "hsl(177, 69%, 41%)",
    "lightskyblue": "hsl(203, 92%, 75%)",
    "lightslategray": "hsl(210, 14%, 53%)",
    "lightsteelblue": "hsl(214, 41%, 70%)",
    "lightyellow": "hsl(60, 100%, 94%)",
    "lime": "hsl(120, 100%, 50%)",
    "limegreen": "hsl(120, 76%, 50%)",
    "linen": "hsl(30, 67%, 94%)",
    "magenta": "hsl(300, 100%, 50%)",
    "maroon": "hsl(0, 100%, 25%)",
    "mediumaquamarine": "hsl(160, 60%, 60%)",
    "mediumblue": "hsl(240, 100%, 40%)",
    "mediumorchid": "hsl(288, 59%, 60%)",
    "mediumpurple": "hsl(259, 59%, 65%)",
    "mediumseagreen": "hsl(147, 50%, 47%)",
    "mediumslateblue": "hsl(207, 53%, 58%)",
    "mediumspringgreen": "hsl(157, 100%, 50%)",
    "mediumturquoise": "hsl(176, 60%, 55%)",
    "mediumvioletred": "hsl(322, 60%, 43%)",
    "midnightblue": "hsl(240, 63%, 27%)",
    "mintcream": "hsl(150, 100%, 98%)",
    "mistyrose": "hsl(6, 100%, 94%)",
    "moccasin": "hsl(38, 100%, 85%)",
    "navajowhite": "hsl(36, 100%, 85%)",
    "navy": "hsl(240, 100%, 25%)",
    "oldlace": "hsl(39, 85%, 94%)",
    "olive": "hsl(60, 100%, 25%)",
    "olivedrab": "hsl(80, 60%, 35%)",
    "orange": "hsl(39, 100%, 50%)",
    "orangered": "hsl(16, 100%, 50%)",
    "orchid": "hsl(302, 58%, 65%)",
    "palegoldenrod": "hsl(55, 67%, 80%)",
    "palegreen": "hsl(120, 93%, 79%)",
    "paleturquoise": "hsl(178, 65%, 80%)",
    "palevioletred": "hsl(340, 60%, 65%)",
    "papayawhip": "hsl(37, 100%, 92%)",
    "peachpuff": "hsl(28, 100%, 86%)",
    "peru": "hsl(30, 63%, 53%)",
    "pink": "hsl(350, 100%, 88%)",
    "plum": "hsl(300, 47%, 75%)",
    "powderblue": "hsl(187, 52%, 80%)",
    "purple": "hsl(300, 100%, 25%)",
    "rebeccapurple": "hsl(270, 50%, 40%)",
    "red": "hsl(0, 100%, 50%)",
    "rosybrown": "hsl(0, 25%, 65%)",
    "royalblue": "hsl(225, 73%, 57%)",
    "saddlebrown": "hsl(25, 75%, 31%)",
    "salmon": "hsl(6, 93%, 71%)",
    "sandybrown": "hsl(28, 87%, 67%)",
    "seagreen": "hsl(146, 50%, 36%)",
    "seashell": "hsl(25, 100%, 97%)",
    "sienna": "hsl(19, 56%, 40%)",
    "silver": "hsl(0, 0%, 75%)",
    "skyblue": "hsl(197, 71%, 73%)",
    "slateblue": "hsl(248, 53%, 58%)",
    "slategray": "hsl(210, 13%, 50%)",
    "snow": "hsl(0, 100%, 99%)",
    "springgreen": "hsl(150, 100%, 50%)",
    "steelblue": "hsl(207, 44%, 49%)",
    "tan": "hsl(34, 44%, 69%)",
    "teal": "hsl(180, 100%, 25%)",
    "thistle": "hsl(300, 24%, 80%)",
    "tomato": "hsl(9, 100%, 64%)",
    "turquoise": "hsl(174, 72%, 56%)",
    "violet": "hsl(300, 50%, 72%)",
    "wheat": "hsl(39, 77%, 83%)",
    "white": "hsl(0, 0%, 100%)",
    "whitesmoke": "hsl(0, 0%, 96%)",
    "yellow": "hsl(60, 100%, 50%)",
    "yellowgreen": "hsl(80, 61%, 50%)"
};



const colorInput = document.getElementById('colorInput');
const hexOutput = document.getElementById('hexOutput');
const rgbOutput = document.getElementById('rgbOutput');
const hslOutput = document.getElementById('hslOutput');
const getBtn = document.getElementById('getBtn');
getBtn.addEventListener('click', getCodeFunc);
function getCodeFunc(e) {
    const hexValue = colorInput.value;
    hexOutput.innerText = hexValue;
    const red = parseInt(hexValue.substring(1, 3), 16);
    const green = parseInt(hexValue.substring(3, 5), 16);
    const blue = parseInt(hexValue.substring(5, 7), 16);
    rgbOutput.innerText = `rgb(${red},${green},${blue})`;
    const { h, s, l } = hexToHSL(hexValue);
    hslOutput.innerText = `hsl(${h}, ${s}, ${l})`;
};

function hexToHSL(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}
