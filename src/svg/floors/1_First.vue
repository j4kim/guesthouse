<script setup>
import { openFloor, room } from "../../store";
import { _ } from "../../translate";
import Arrow from "../Arrow.vue";
import Room101Back from "./1/Room101Back.vue";
import Room101Front from "./1/Room101Front.vue";
</script>

<template>
    <g id="floor_1">
        <Transition>
            <g id="walls_back" v-if="openFloor !== 1">
                <g id="wall_south">
                    <polygon
                        points="920.6 754.7 920.6 585.9 1638.4 1000.3 1638.4 1169.1 920.6 754.7"
                        fill="#fff"
                        stroke-width="0"
                    />
                    <path
                        d="m921.1,586.7l716.8,413.8v167.7l-716.8-413.8v-167.7m-1-1.7v170l718.8,415v-170l-718.8-415h0Z"
                        stroke-width="0"
                    />
                </g>
                <g id="wall_east">
                    <polygon
                        points="357.7 910.3 919.6 585.9 919.6 754.7 357.7 1079.1 357.7 910.3"
                        fill="#fff"
                        stroke-width="0"
                    />
                    <path
                        d="m919.1,586.7v167.7l-560.9,323.8v-167.7l560.9-323.8m1-1.7l-562.9,325v170l562.9-325v-170h0Z"
                        stroke-width="0"
                    />
                </g>
                <g id="floor_1_floor">
                    <polygon
                        points="358.2 1080 920.1 755.6 1637.9 1170 1076 1494.4 358.2 1080"
                        fill="#fff"
                        stroke-width="0"
                    />
                    <path
                        d="m920.1,756.2l716.8,413.8-560.9,323.8-716.8-413.8,560.9-323.8m0-1.2l-562.9,325,718.8,415,562.9-325-718.8-415h0Z"
                        stroke-width="0"
                    />
                </g>
            </g>
        </Transition>
        <g id="rooms">
            <g
                id="room_103"
                :class="{ muted: room && room !== 103 }"
                @click="room = 103"
            >
                <g id="balcon">
                    <polygon
                        points="963.4 800 980.72 790 954.74 775 1006.7 745 1231.87 875 1179.9 905 1145.26 885 1127.94 895 1075.87 864.94 1093.3 855 1024.02 815 1006.7 825 963.4 800"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <g>
                        <polygon
                            points="1231.87 875 1231.87 825 1006.7 695 1006.7 745 1231.87 875"
                            fill="#d7dedd"
                            stroke="#000"
                            stroke-linejoin="bevel"
                            stroke-width=".75"
                        />
                        <polygon
                            points="1006.7 695 1006.7 745 954.74 775 954.74 725 1006.7 695"
                            fill="#d7dedd"
                            stroke="#000"
                            stroke-linejoin="bevel"
                            stroke-width=".75"
                        />
                        <polygon
                            points="1179.9 905 1179.9 855 1231.87 825 1231.87 875 1179.9 905"
                            fill="#d7dedd"
                            stroke="#000"
                            stroke-linejoin="bevel"
                            stroke-width=".75"
                        />
                    </g>
                </g>
                <polygon
                    points="668.95 920 781.53 985 851.42 945.22 738.23 880 668.95 920"
                    fill="#d7dedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="824.83 970 868.13 945 746.89 875 920.1 775 1179.9 925 980.72 1040 937.42 1015 963.4 1000 954.74 995 911.44 1020 824.83 970"
                    fill="#d7dedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="746.89 875 746.89 755 920.1 655 920.1 775 746.89 875"
                    fill="#d7dedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="920.1 655 1179.9 805 1179.9 925 1127.94 895 1127.94 775 1075.98 745 1075.87 864.94 1006.7 825 1006.7 705 963.4 680 963.4 800 920.1 775 920.1 655"
                    fill="#d7dedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="668.95 920 668.95 800 738.23 760 738.23 880 668.95 920"
                    fill="#d7dedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <g>
                    <polygon
                        points="703.59 940 703.59 910 668.95 890 668.95 920 703.59 940"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="772.87 900 703.59 940 703.59 910 772.87 870 772.87 900"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="668.95 890 738.23 850 772.87 870 703.59 910 668.95 890"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="790.19 830 876.79 880 954.74 835 868.13 785 790.19 830"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="876.79 900 876.79 880 954.74 835 954.74 855 876.79 900"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="790.19 830 790.19 850 876.79 900 876.79 880 790.19 830"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="824.83 970 824.83 929.9 850.81 915 850.81 955 824.83 970"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="937.42 1005 911.44 1020 911.44 980 937.42 965 937.42 1005"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polyline
                        points="824.83 929.9 911.44 980 937.42 965 850.81 915"
                        fill="#d7dedd"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <polygon
                    points="1024.02 905 1015.36 930 1024.02 935 1032.68 930 1024.02 905"
                    fill="none"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <path
                    d="M1043.48,916.24c-10.68,6.17-28.05,6.14-38.8-.07-10.75-6.21-10.8-16.24-.12-22.4,10.68-6.17,28.05-6.14,38.8.07,10.75,6.21,10.8,16.24.12,22.4Z"
                    fill="#fff"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="781.53 905 764.21 935 764.21 835 781.53 805 781.53 905"
                    fill="#fff"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="790.19 900 790.19 800 833.49 825 833.49 924.9 790.19 900"
                    fill="none"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="781.53 905 781.53 805 824.83 830 824.83 929.9 781.53 905"
                    fill="none"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
            </g>
            <g
                id="room_102"
                :class="{ muted: room && room !== 102 }"
                @click="room = 102"
            >
                <polygon
                    points="764.21 1105 868.13 1045 772.87 990 703.59 1030 694.93 1025 694.93 1025 764.21 985 660.46 924.9 556.37 985 660.29 1045 651.63 1050 547.71 990 391.82 1080 599.67 1200 755.55 1110 703.59 1080 712.25 1075 764.21 1105"
                    fill="#e3f6c9"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="556.37 985 556.37 865 660.29 805 660.46 924.9 556.37 985"
                    fill="#e3f6c9"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="764.21 985 764.21 865 660.29 805 660.46 924.9 764.21 985"
                    fill="#e3f6c9"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="703.59 1030 755.58 980 772.87 870 772.87 990 703.59 1030"
                    fill="#e3f6c9"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="772.87 870 772.87 990 868.13 1045 868.13 925 772.87 870"
                    fill="#e3f6c9"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="547.71 990 547.71 870 391.82 960 391.82 1080 547.71 990"
                    fill="#e3f6c9"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="651.63 1050 547.71 990 547.71 870 565.03 980 651.63 1050"
                    fill="#e3f6c9"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
            </g>
            <g
                id="common"
                :class="{ muted: room && room !== 'common' }"
                @click="room = 'common'"
            >
                <polygon
                    points="608.33 1085 608.33 1205 720.91 1140 720.91 1050 755.55 1030 755.55 1120 928.76 1020 928.76 899.76 608.33 1085"
                    fill="#ffe6d4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="946.08 1200 868.13 1155 963.4 1100 937.42 1085 946.08 1080 885.46 1045 608.33 1205 772.87 1300 946.08 1200"
                    fill="#ffe6d4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1075.98 1155 1006.7 1195 1058.66 1225 1188.56 1150 1145.26 1125 1127.94 1135 928.76 1020 885.46 1045 1075.98 1155"
                    fill="#ffe6d4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="928.76 1020 937.42 1025 937.42 935 972.06 955 972.06 1045 1006.7 1065 1006.7 945 928.76 899.76 928.76 1020"
                    fill="#ffe6d4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <g>
                    <polygon
                        points="1041.34 1145 972.06 1105 885.46 1155 954.71 1195.02 1041.34 1145"
                        fill="#cacaca"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="972.06 1005 885.46 1055 885.46 1155 972.06 1105 972.06 1005"
                        fill="#cacaca"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <path
                        d="M972.06,1005v100s69.28,40,69.28,40v-100s-69.28-40-69.28-40ZM1032.68,1140l-51.96-30v-90s51.96,30,51.96,30v90Z"
                        fill="#cacaca"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <polygon
                    points="868.13 1155 868.13 1035 946.08 1080 946.08 1200 868.13 1155"
                    fill="#ffe6d4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <g>
                    <line
                        x1="790.19"
                        y1="1187.5"
                        x2="790.19"
                        y2="1217.5"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <line
                        x1="807.51"
                        y1="1177.5"
                        x2="807.51"
                        y2="1207.5"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <line
                        x1="729.21"
                        y1="1152.62"
                        x2="729.21"
                        y2="1182.29"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="712.25 1152.5 746.89 1132.5 824.83 1177.5 790.19 1197.5 712.25 1152.5"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="877.19 1240.11 876.8 1160 859.39 1149.93 859.39 1230.1 877.19 1240.11"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="877.19 1240.11 902.78 1225 902.78 1145 876.8 1160 877.19 1240.11"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="859.39 1149.93 885.55 1135.02 902.78 1145 876.8 1160 859.39 1149.93"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="772.87 1260 703.59 1220 703.59 1260 772.87 1300 772.87 1260"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="772.87 1260 877.19 1199.89 877.19 1240.11 772.87 1300 772.87 1260"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="703.59 1220 738.23 1200 781.53 1225 850.81 1185 877.19 1199.89 772.87 1260 703.59 1220"
                        fill="#ffe6d4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
            </g>
            <g id="stairs" :class="{ muted: room }">
                <polygon
                    points="1188.56 850.05 1119.28 890.05 1136.29 900.04 1102.13 920.15 1205.88 980.05 1240.53 960.05 1257.85 970.05 1327.13 930.05 1188.56 850.05"
                    fill="#ffdedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1110.62 1115 1205.88 980.05 1153.92 950.05 1058.66 1085 1110.62 1115"
                    fill="#ffdedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1058.66 915 1153.92 950.02 1101.96 920.02 1006.7 885 1058.66 915"
                    fill="#ffdedd"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
            </g>
            <g
                id="room_104"
                :class="{ muted: room && room !== 104 }"
                @click="room = 104"
            >
                <g id="balcon-2" data-name="balcon">
                    <polygon
                        points="1379.09 1040.01 1396.41 1030.01 1370.43 1015.01 1422.39 985.01 1647.56 1115.01 1595.6 1145.01 1560.95 1125.01 1543.63 1135.01 1491.56 1104.95 1508.99 1095.01 1439.71 1055.01 1422.39 1065.01 1379.09 1040.01"
                        fill="#e7d2c4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <g>
                        <polygon
                            points="1647.56 1115.01 1647.56 1065.01 1422.39 935.01 1422.39 985.01 1647.56 1115.01"
                            fill="#e7d2c4"
                            stroke="#000"
                            stroke-linejoin="bevel"
                            stroke-width=".75"
                        />
                        <polygon
                            points="1422.39 935.01 1422.39 985.01 1370.43 1015.01 1370.43 965.01 1422.39 935.01"
                            fill="#e7d2c4"
                            stroke="#000"
                            stroke-linejoin="bevel"
                            stroke-width=".75"
                        />
                        <polygon
                            points="1595.6 1145.01 1595.6 1095.01 1647.56 1065.01 1647.56 1115.01 1595.6 1145.01"
                            fill="#e7d2c4"
                            stroke="#000"
                            stroke-linejoin="bevel"
                            stroke-width=".75"
                        />
                    </g>
                </g>
                <polygon
                    points="1422.02 1274.99 1604.32 1170.05 1335.85 1015.05 1153.92 1120 1422.02 1274.99"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1335.79 895.01 1604.19 1050 1604.19 1170 1543.63 1135.01 1543.63 1015.01 1491.67 985.01 1491.56 1104.95 1422.39 1065.01 1422.39 945.01 1379.09 920.01 1379.09 1040.01 1335.79 1015.01 1335.79 895.01"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1153.92 1120 1153.92 1000 1335.79 895 1335.79 1015 1153.92 1120"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1162.57 1125 1188.56 1102.5 1188.56 1012.5 1162.57 1034.99 1162.57 1125"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1162.57 1125 1162.57 1034.99 1197.22 1054.99 1197.22 1145.02 1162.57 1125"
                    fill="none"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <g>
                    <polygon
                        points="1240.53 1169.94 1240.53 1139.94 1318.47 1184.94 1318.47 1215.06 1240.53 1169.94"
                        fill="#e7d2c4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1240.53 1139.94 1327.13 1089.94 1405.07 1134.94 1318.47 1184.94 1240.53 1139.94"
                        fill="#e7d2c4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1405.07 1134.94 1405.07 1164.94 1318.47 1215.06 1318.47 1184.94 1405.07 1134.94"
                        fill="#e7d2c4"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <polygon
                    points="1436.76 1166.76 1396.48 1170 1396.48 1260 1436.76 1256.76 1436.76 1166.76"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
            </g>
            <Room101Back
                :class="{ muted: room && room !== 101 }"
                @click="room = 101"
            ></Room101Back>
            <g
                id="room_104_front"
                :class="{ muted: room && room !== 104 }"
                @click="room = 104"
            >
                <polygon
                    points="1197.22 1295 1318.47 1225 1413.73 1280 1292.49 1350 1197.22 1295"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1396.25 1260.09 1361.63 1240.08 1361.63 1150.08 1396.41 1170 1396.25 1260.09"
                    fill="none"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1318.47 1225 1318.47 1165 1327.13 1200 1353.11 1225 1353.11 1245 1318.47 1225"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1197.22 1295 1309.99 1199.89 1318.47 1165 1318.47 1225 1197.22 1295"
                    fill="#e7d2c4"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
            </g>
            <Room101Front
                :class="{ muted: room && room !== 101 }"
                @click="room = 101"
            ></Room101Front>
        </g>
        <Transition>
            <g id="walls_front" v-if="openFloor !== 1">
                <polygon
                    id="wall_west"
                    points="1076 1325 1638.9 1000 1638.9 1170 1076 1495 1076 1325"
                    fill="#fff"
                    stroke="#000"
                    stroke-miterlimit="10"
                />
                <g id="windows_west">
                    <polygon
                        points="1136.6 1330 1179.8 1305 1179.8 1385 1136.6 1410 1136.6 1330"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1236.2 1272.5 1279.4 1247.5 1279.4 1327.5 1236.2 1352.5 1236.2 1272.5"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1335.8 1215 1379 1190 1379 1270 1335.8 1295 1335.8 1215"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1435.4 1157.5 1478.6 1132.5 1478.6 1212.5 1435.4 1237.5 1435.4 1157.5"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1535 1100 1578.2 1075 1578.2 1155 1535 1180 1535 1100"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                </g>
                <g>
                    <path
                        d="m357.2,910v170l718.8,415v-170l-718.8-415Zm86.4,160l-34.8-19.9v-70l34.8,20.3v69.6Zm95.3,55l-34.8-19.9v-70l34.8,20.3v69.6Zm95.3,55l-34.8-19.9v-70l34.8,20.3v69.6Zm95.3,55l-34.8-19.9v-70l34.8,20.3v69.6Zm95.3,55l-34.8-19.9v-70l34.8,20.3v69.6Zm95.3,55l-34.8-19.9v-70l34.8,20.3v69.6Zm95.3,55l-34.8-19.9v-70l34.8,20.3v69.6Z"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <g id="windows_north">
                        <polygon
                            points="1015.5 1410 972 1384.7 972 1305 1015.5 1330.3 1015.5 1410"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="920.1 1355 876.7 1329.7 876.7 1249.9 920.1 1275.3 920.1 1355"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="824.8 1300 781.3 1274.6 781.3 1194.9 824.8 1220.2 824.8 1300"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="729.5 1245 686 1219.6 686 1139.9 729.5 1165.2 729.5 1245"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="634.2 1189.9 590.7 1164.6 590.7 1084.8 634.2 1110.2 634.2 1189.9"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="538.9 1134.9 495.4 1109.6 495.4 1029.8 538.9 1055.2 538.9 1134.9"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="443.6 1079.9 400.1 1054.5 400.1 974.8 443.6 1000.1 443.6 1079.9"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="1015.5 1410 1037.1 1422.5 1037.1 1342.8 1015.5 1330.3 1015.5 1410"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="950.5 1372.5 972.2 1385 972.2 1305.3 950.5 1292.8 950.5 1372.5"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="920 1354.8 941.7 1367.3 941.7 1287.6 920 1275.1 920 1354.8"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="855.1 1317.3 876.7 1329.8 876.7 1250.1 855.1 1237.6 855.1 1317.3"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="824.6 1299.6 846.3 1312.1 846.3 1232.4 824.6 1219.9 824.6 1299.6"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="759.7 1262.1 781.3 1274.6 781.3 1194.9 759.7 1182.4 759.7 1262.1"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="729.2 1244.4 750.9 1256.9 750.9 1177.2 729.2 1164.7 729.2 1244.4"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="664.3 1206.9 685.9 1219.4 685.9 1139.7 664.3 1127.2 664.3 1206.9"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="633.8 1189.2 655.5 1201.7 655.5 1122 633.8 1109.5 633.8 1189.2"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="568.9 1151.7 590.5 1164.2 590.5 1084.5 568.9 1072 568.9 1151.7"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="538.4 1134 560.1 1146.5 560.1 1066.8 538.4 1054.3 538.4 1134"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="473.5 1096.5 495.1 1109 495.1 1029.3 473.5 1016.8 473.5 1096.5"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="443 1078.9 464.7 1091.4 464.7 1011.6 443 999.1 443 1078.9"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                        <polygon
                            points="378.1 1041.4 399.7 1053.9 399.7 974.1 378.1 961.6 378.1 1041.4"
                            fill="none"
                            stroke="#000"
                            stroke-miterlimit="10"
                        />
                    </g>
                    <polyline
                        points="374.4 920 374.4 1090 357.2 1080 357.2 910"
                        fill="#fff"
                        stroke="#000"
                        stroke-linejoin="bevel"
                    />
                    <polyline
                        points="1076.1 1325.5 1076.1 1495.5 1058.9 1485.5 1058.9 1315.5"
                        fill="#fff"
                        stroke="#000"
                        stroke-linejoin="bevel"
                    />
                </g>
                <g id="sign">
                    <g>
                        <path
                            d="m531.2,1162.2v-3.8l8.6,4.9v9c-.8.4-2,.6-3.6.4-1.6-.2-3.2-.8-4.8-1.7-2.1-1.2-3.8-2.7-5.4-4.6-1.5-1.9-2.7-3.9-3.4-6.2-.8-2.3-1.2-4.5-1.2-6.7s.4-4.2,1.3-5.5,2.1-2,3.8-2c1.3,0,2.8.5,4.7,1.6,2.4,1.4,4.3,3.1,5.7,5.1,1.4,2,2.3,4.1,2.6,6.4l-3.9-1.4c-.3-1.3-.8-2.4-1.6-3.5-.8-1.1-1.7-2-2.9-2.6-1.7-1-3.1-1.2-4.1-.5-1,.7-1.5,2.2-1.5,4.7s.5,5,1.6,6.9c1,1.9,2.4,3.4,4.1,4.4.8.5,1.7.8,2.5.9.8.1,1.6,0,2.2-.1v-2.9l-4.5-2.6Z"
                            stroke-width="0"
                        />
                        <path
                            d="m550,1158.8l4,2.3v12.2c0,1.9,0,3.2.1,3.9.2,1,.6,2,1.2,2.9.6.9,1.5,1.7,2.6,2.4,1.1.7,2,.9,2.5.7.6-.2.9-.6,1-1.3s.2-1.9.2-3.7v-12.5l4,2.3v11.8c0,2.7-.1,4.6-.3,5.6-.2,1-.6,1.7-1.2,2.1-.6.4-1.3.6-2.3.5s-2.2-.6-3.8-1.5c-1.9-1.1-3.3-2.2-4.3-3.2-1-1.1-1.7-2.1-2.3-3.3-.6-1.1-.9-2.2-1.1-3.1-.3-1.4-.4-3.4-.4-5.9v-12Z"
                            stroke-width="0"
                        />
                        <path
                            d="m576.4,1196.6v-22.5l14.6,8.4v3.8l-10.6-6.1v5l9.9,5.7v3.8l-9.9-5.7v6.1l11,6.3v3.8l-14.9-8.6Z"
                            stroke-width="0"
                        />
                        <path
                            d="m600.3,1203l3.9,1.8c.2,1.6.7,3,1.4,4.1.7,1.1,1.7,2,2.9,2.7,1.3.7,2.2,1,2.9.7.6-.2,1-.8,1-1.6s-.1-1.1-.4-1.6c-.3-.5-.7-1.1-1.4-1.8-.5-.5-1.5-1.4-3.2-2.8-2.1-1.8-3.6-3.4-4.5-4.8-1.2-1.9-1.8-3.8-1.8-5.6s.3-2.1.9-2.7,1.4-1,2.5-.9c1.1,0,2.4.6,3.9,1.4,2.5,1.4,4.3,3.1,5.6,5.1,1.2,2,1.9,4,2,6.1l-4-2.1c-.2-1.3-.5-2.3-1.1-3.1s-1.4-1.6-2.5-2.2c-1.2-.7-2.1-.9-2.7-.7-.4.1-.6.5-.6,1s.2,1.1.6,1.7c.5.8,1.7,2,3.6,3.6,1.9,1.6,3.4,3,4.3,4.1.9,1.1,1.6,2.3,2.2,3.5.5,1.3.8,2.6.8,4s-.3,2.3-.9,3.1c-.6.8-1.5,1.1-2.7,1-1.1-.1-2.6-.7-4.3-1.6-2.5-1.4-4.4-3.2-5.7-5.3s-2.1-4.5-2.4-7.1Z"
                            stroke-width="0"
                        />
                        <path
                            d="m630.6,1227.9v-18.7l-5.8-3.4v-3.8l15.6,9v3.8l-5.8-3.4v18.7l-4-2.3Z"
                            stroke-width="0"
                        />
                        <path
                            d="m649.6,1238.8v-22.5l4,2.3v8.9l7.8,4.5v-8.9l4,2.3v22.5l-4-2.3v-9.9l-7.8-4.5v9.9l-4-2.3Z"
                            stroke-width="0"
                        />
                        <path
                            d="m675.2,1242.5c0-2.3.3-4.1.9-5.3.4-.9,1.1-1.6,1.8-2,.8-.5,1.6-.7,2.5-.6,1.2.1,2.6.6,4.2,1.6,2.9,1.7,5.2,4,6.9,7.1,1.7,3.1,2.6,6.4,2.6,10.1s-.9,6-2.6,7-4,.8-6.9-.9c-2.9-1.7-5.2-4-7-7.1s-2.6-6.4-2.6-9.9Zm4.1,2.2c0,2.6.5,4.8,1.5,6.7,1,1.9,2.3,3.3,3.9,4.2,1.6.9,2.9,1,3.9.3,1-.7,1.5-2.4,1.5-5s-.5-4.8-1.5-6.6c-1-1.8-2.3-3.2-3.9-4.2-1.6-.9-3-1.1-4-.4s-1.5,2.4-1.5,5Z"
                            stroke-width="0"
                        />
                        <path
                            d="m703.9,1247.6l4,2.3v12.2c0,1.9,0,3.2.1,3.9.2,1,.6,2,1.2,2.9s1.5,1.7,2.6,2.4c1.1.7,2,.9,2.5.7.6-.2.9-.6,1-1.3s.2-1.9.2-3.7v-12.5l4,2.3v11.8c0,2.7-.1,4.6-.3,5.6-.2,1-.6,1.7-1.2,2.1-.6.4-1.3.6-2.3.5-1-.1-2.2-.6-3.8-1.5-1.9-1.1-3.3-2.2-4.3-3.2-1-1.1-1.7-2.1-2.3-3.3-.6-1.1-.9-2.2-1.1-3.1-.3-1.4-.4-3.4-.4-5.9v-12Z"
                            stroke-width="0"
                        />
                        <path
                            d="m729.3,1277.5l3.9,1.8c.2,1.6.7,3,1.4,4.1s1.7,2,2.9,2.7c1.3.7,2.2,1,2.9.7.6-.2,1-.8,1-1.6s-.1-1.1-.4-1.6c-.3-.5-.7-1.1-1.4-1.8-.5-.5-1.5-1.4-3.2-2.8-2.1-1.8-3.6-3.4-4.5-4.8-1.2-1.9-1.8-3.8-1.8-5.6s.3-2.1.9-2.7c.6-.7,1.4-1,2.5-.9,1.1,0,2.4.6,3.9,1.4,2.5,1.4,4.3,3.1,5.6,5.1,1.2,2,1.9,4,2,6.1l-4-2.1c-.2-1.3-.5-2.3-1.1-3.1-.6-.8-1.4-1.6-2.5-2.2-1.2-.7-2.1-.9-2.7-.7-.4.1-.6.5-.6,1s.2,1.1.6,1.7c.5.8,1.7,2,3.6,3.6,1.9,1.6,3.4,3,4.3,4.1s1.6,2.3,2.2,3.5c.5,1.3.8,2.6.8,4s-.3,2.3-.9,3.1c-.6.8-1.5,1.1-2.7,1-1.1-.1-2.6-.7-4.3-1.6-2.5-1.4-4.4-3.2-5.7-5.3s-2.1-4.5-2.4-7.1Z"
                            stroke-width="0"
                        />
                        <path
                            d="m755.2,1299.8v-22.5l14.6,8.4v3.8l-10.6-6.1v5l9.9,5.7v3.8l-9.9-5.7v6.1l11,6.3v3.8l-14.9-8.6Z"
                            stroke-width="0"
                        />
                    </g>
                    <g>
                        <path
                            d="m902.1,1376.3l3.8,3.6c-.6,2.1-1.6,3.4-2.9,3.8-1.4.4-3.1,0-5.2-1.2-2.6-1.5-4.8-3.8-6.4-6.8-1.7-3-2.5-6.3-2.5-9.8s.8-6.2,2.5-7.3c1.7-1.1,3.9-.9,6.7.7,2.4,1.4,4.4,3.3,5.9,5.8.9,1.5,1.6,3.3,2,5.3l-3.9-1.2c-.2-1.3-.7-2.5-1.5-3.6-.7-1.1-1.6-2-2.7-2.6-1.5-.8-2.6-.9-3.5-.2-.9.7-1.4,2.4-1.4,5s.4,5.1,1.3,6.9c.9,1.7,2.1,3,3.5,3.8,1.1.6,2,.7,2.7.4s1.3-1.2,1.6-2.7Z"
                            stroke-width="0"
                        />
                        <path
                            d="m933.7,1402.8l-4.3-2.5-1.7-6.1-7.9-4.5-1.6,4.2-4.2-2.4,7.7-18.1,4.2,2.4,7.9,27.1Zm-7.3-13.1l-2.7-9.9-2.7,6.8,5.4,3.1Z"
                            stroke-width="0"
                        />
                        <path
                            d="m942.4,1407.8v-22.5l13.5,7.8v3.8l-9.5-5.5v5.3l8.2,4.7v3.8l-8.2-4.7v9.6l-4-2.3Z"
                            stroke-width="0"
                        />
                        <path
                            d="m965.7,1421.3v-22.5l14.6,8.4v3.8l-10.6-6.1v5l9.9,5.7v3.8l-9.9-5.7v6.1l11,6.3v3.8l-14.9-8.6Z"
                            stroke-width="0"
                        />
                    </g>
                </g>
            </g>
        </Transition>
        <Transition>
            <g v-if="room === 101">
                <Arrow :x="850" :y="1380" @click="room = 'common'" north>
                    ← {{ _("common kitchen") }}
                </Arrow>
                <Arrow :x="1230" :y="1420" @click="room = 104" west>
                    {{ _("room") }} 104 →
                </Arrow>
            </g>
            <g v-else-if="room === 'common'">
                <Arrow :x="710" :y="1290" @click="room = 101" north>
                    {{ _("room") }} 101 →
                </Arrow>
                <Arrow :x="620" :y="1270" @click="room = 102" north>
                    ← {{ _("room") }} 102
                </Arrow>
            </g>
            <g v-else-if="room === 102">
                <Arrow :x="500" :y="1180" @click="room = 'common'" north>
                    {{ _("common kitchen") }} →
                </Arrow>
                <Arrow :x="590" :y="820" @click="room = 103" west stand>
                    {{ _("room") }} 103 →
                </Arrow>
            </g>
            <g v-else-if="room === 103">
                <Arrow :x="1150" :y="750" @click="room = 104" north stand>
                    {{ _("room") }} 104 →
                </Arrow>
                <Arrow :x="750" :y="730" @click="room = 102" west stand>
                    ← {{ _("room") }} 102
                </Arrow>
            </g>
            <g v-else-if="room === 104">
                <Arrow :x="1400" :y="1320" @click="room = 101" west>
                    ← {{ _("room") }} 101
                </Arrow>
                <Arrow :x="1450" :y="930" @click="room = 103" north stand>
                    ← {{ _("room") }} 103
                </Arrow>
            </g>
        </Transition>
    </g>
</template>

<style>
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.muted {
    opacity: 0;
    pointer-events: none;
}
</style>
