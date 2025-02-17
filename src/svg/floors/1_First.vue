<script setup>
import { openFloor, room } from "../../store";
</script>

<template>
    <g id="floor_1">
        <Transition>
            <g v-if="openFloor !== 1">
                <g id="walls_back">
                    <g id="wall_south">
                        <polygon
                            points="920.6 754.71 920.6 585.87 1638.4 1000.29 1638.4 1169.13 920.6 754.71"
                            fill="#fff"
                        />
                        <path
                            d="M921.1,586.73l716.8,413.85v167.69l-716.8-413.85v-167.69M920.1,585v170l718.8,415v-170l-718.8-415h0Z"
                        />
                    </g>
                    <g id="wall_east">
                        <polygon
                            points="357.68 910.29 919.6 585.87 919.6 754.71 357.68 1079.13 357.68 910.29"
                            fill="#fff"
                        />
                        <path
                            d="M919.1,586.73v167.69l-560.92,323.85v-167.69l560.92-323.84M920.1,585l-562.92,325v170l562.92-325v-170h0Z"
                        />
                    </g>
                </g>
                <g id="floor_1_floor">
                    <polygon
                        points="358.18 1080 920.1 755.58 1637.9 1170 1075.98 1494.42 358.18 1080"
                        fill="#fff"
                    />
                    <path
                        d="M920.1,756.15l716.8,413.85-560.92,323.85-716.8-413.85,560.92-323.85M920.1,755l-562.92,325,718.8,415,562.92-325-718.8-415h0Z"
                    />
                </g>
            </g>
        </Transition>
        <g id="rooms">
            <g id="room_103" :class="{ muted: room && room !== 103 }">
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
            <g id="room_102" :class="{ muted: room && room !== 102 }">
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
            <g id="common" :class="{ muted: room && room !== 'common' }">
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
            <g id="stairs" :class="{ muted: room && room !== 'stairs' }">
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
            <g id="room_104" :class="{ muted: room && room !== 104 }"  @click="room = 104">
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
            <g id="room_101_back" :class="{ muted: room && room !== 101 }" @click="room = 101">
                <polygon
                    points="1058.66 1225 1153.92 1170 1275.17 1240 1179.9 1295 1058.66 1225"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1153.92 1170 1153.92 1050 1275.17 1120 1275.17 1240 1153.92 1170"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1153.92 1050 1058.66 1105 1058.66 1225 1153.92 1170 1153.92 1050"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1153.92 1170.02 1110.62 1195.02 1153.9 1220.01 1197.22 1195.02 1153.92 1170.02"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <g>
                    <polygon
                        points="1197.22 1165.03 1171.25 1180.03 1197.21 1195.02 1223.2 1180.03 1197.22 1165.03"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1197.22 1155 1197.22 1125 1223.2 1140 1223.25 1170.02 1197.22 1155"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="1240.51 1220.01 1240.51 1179.99 1257.85 1190 1257.85 1230 1240.51 1220.01"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <path
                        d="M1238.85,1205.95l-10.7,6.17c-2.2,1.27-2.21,4.45,0,5.72l10.7,6.19c1.02.59,2.28.59,3.31,0l10.71-6.18c2.2-1.27,2.2-4.45,0-5.73l-10.71-6.18c-1.02-.59-2.28-.59-3.3,0Z"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
            </g>
            <g id="room_104_front" :class="{ muted: room && room !== 104 }"  @click="room = 104">
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
            <g id="room_101" :class="{ muted: room && room !== 101 }" @click="room = 101">
                <polygon
                    points="781.53 1305 980.72 1190 1275.17 1360 1075.98 1475 868.29 1355.09 781.53 1305"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <line
                    x1="1067.5"
                    y1="1240.11"
                    x2="868.29"
                    y2="1355.09"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="781.53 1305 980.72 1190 980.72 1070 781.53 1185 781.53 1305"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="920.1 1105 920.1 1225 989.34 1264.99 937.29 1215.29 920.1 1105"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1006.7 1205 980.72 1190 980.72 1070 1050 1110 1093.25 1235.03 1093.3 1255 1041.34 1225 1041.31 1135.02 1006.7 1115 1006.7 1205"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1127.94 1275 1127.94 1255 1257.85 1310 1275.17 1280 1275.17 1360 1127.94 1275"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1006.7 1115 972.06 1125 972.06 1215 1006.7 1205 1006.7 1115"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <polygon
                    points="1049.82 1199.89 1084.62 1220.01 1067.03 1230.17 1032.68 1210 1049.82 1199.89"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <g>
                    <line
                        x1="928.76"
                        y1="1360"
                        x2="928.76"
                        y2="1329.99"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <line
                        x1="963.4"
                        y1="1380"
                        x2="963.21"
                        y2="1350.22"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <line
                        x1="1015.41"
                        y1="1349.97"
                        x2="1015.41"
                        y2="1320.08"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="980.81 1300 1015.41 1320.08 963.21 1350.22 928.76 1329.99 980.81 1300"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <polygon
                    points="1093.3 1165 1058.66 1175 1058.66 1265 1093.3 1255 1093.3 1165"
                    fill="#e7bfd5"
                    stroke="#000"
                    stroke-linejoin="bevel"
                    stroke-width=".75"
                />
                <g>
                    <polygon
                        points="807.51 1290 833.49 1305 833.47 1264.99 807.6 1249.95 807.51 1290"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="833.47 1264.99 928.76 1210 928.67 1249.95 833.49 1305 833.47 1264.99"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="807.6 1249.95 902.81 1195.02 928.76 1210 833.47 1264.99 807.6 1249.95"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="807.51 1260 790.19 1270 842.14 1300 859.39 1290.05 807.51 1260"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="790.19 1270 790.19 1300 842.15 1330 842.14 1300 790.19 1270"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="859.39 1290.05 859.39 1320.05 842.15 1330 842.14 1300 859.39 1290.05"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="1153.63 1259.97 1231.62 1304.95 1145.19 1355.05 1067.03 1309.97 1153.63 1259.97"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1067.03 1339.97 1067.03 1309.97 1145.19 1355.05 1145.19 1385.05 1067.03 1339.97"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1231.62 1304.95 1231.62 1334.95 1145.19 1385.05 1145.19 1355.05 1231.62 1304.95"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="980.72 1410 980.72 1390 1015.41 1410.03 1015.41 1430.03 980.72 1410"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1015.41 1410.03 1032.68 1400 1032.68 1420 1015.41 1430.03 1015.41 1410.03"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="980.72 1390 998.06 1379.98 1032.68 1400 1015.41 1410.03 980.72 1390"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="993.71 1387.5 1019.69 1402.5 1019.69 1382.5 993.71 1367.5 993.71 1387.5"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
                <g>
                    <polygon
                        points="1214.49 1335.11 1231.81 1325.11 1249.09 1335.09 1231.79 1345.12 1214.49 1335.11"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1214.47 1345.1 1231.79 1355.26 1231.79 1345.12 1214.49 1335.11 1214.47 1345.1"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                    <polygon
                        points="1249.26 1345.19 1249.09 1335.09 1231.79 1345.12 1231.79 1355.26 1249.26 1345.19"
                        fill="#e7bfd5"
                        stroke="#000"
                        stroke-linejoin="bevel"
                        stroke-width=".75"
                    />
                </g>
            </g>
        </g>
        <Transition>
            <g id="walls_front" v-if="openFloor !== 1">
                <polygon
                    id="wall_west"
                    points="1075.98 1325 1638.9 1000 1638.9 1170 1075.98 1495 1075.98 1325"
                    fill="#fff"
                    stroke="#000"
                    stroke-miterlimit="10"
                />
                <g id="windows_west">
                    <polygon
                        points="1136.6 1330 1179.82 1304.95 1179.82 1385.02 1136.6 1409.98 1136.6 1330"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1236.2 1272.5 1279.42 1247.45 1279.42 1327.52 1236.2 1352.48 1236.2 1272.5"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1335.79 1215 1379.01 1189.95 1379.01 1270.02 1335.79 1294.98 1335.79 1215"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1435.38 1157.5 1478.6 1132.45 1478.6 1212.52 1435.38 1237.48 1435.38 1157.5"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1534.97 1100 1578.2 1074.95 1578.2 1155.02 1534.97 1179.98 1534.97 1100"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                </g>
                <g>
                    <polygon
                        id="wall_north"
                        points="357.18 910 1075.98 1325 1075.98 1495 357.18 1080 357.18 910"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polyline
                        points="374.42 919.99 374.38 1089.99 357.18 1079.99 357.18 909.99"
                        fill="#fff"
                        stroke="#000"
                        stroke-linejoin="bevel"
                    />
                    <polyline
                        points="1076.13 1325.49 1076.08 1495.49 1058.89 1485.49 1058.88 1315.48"
                        fill="#fff"
                        stroke="#000"
                        stroke-linejoin="bevel"
                    />
                </g>
                <g id="windows_north">
                    <polygon
                        points="1015.45 1410.05 971.96 1384.7 971.96 1304.95 1015.45 1330.3 1015.45 1410.05"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="920.14 1355.02 876.66 1329.67 876.66 1249.93 920.14 1275.27 920.14 1355.02"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="824.83 1299.99 781.35 1274.65 781.35 1194.9 824.83 1220.24 824.83 1299.99"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="729.52 1244.97 686.04 1219.62 686.04 1139.87 729.52 1165.22 729.52 1244.97"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="634.21 1189.94 590.73 1164.59 590.73 1084.85 634.21 1110.19 634.21 1189.94"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="538.91 1134.91 495.42 1109.57 495.42 1029.82 538.91 1055.16 538.91 1134.91"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="443.6 1079.88 400.11 1054.54 400.11 974.79 443.6 1000.14 443.6 1079.88"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="1015.45 1410.05 1037.1 1422.55 1037.1 1342.8 1015.45 1330.3 1015.45 1410.05"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="950.5 1372.55 972.15 1385.05 972.15 1305.3 950.5 1292.8 950.5 1372.55"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="920.05 1354.85 941.7 1367.35 941.7 1287.6 920.05 1275.1 920.05 1354.85"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="855.1 1317.35 876.75 1329.85 876.75 1250.1 855.1 1237.6 855.1 1317.35"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="824.65 1299.65 846.3 1312.15 846.3 1232.4 824.65 1219.9 824.65 1299.65"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="759.7 1262.15 781.35 1274.65 781.35 1194.9 759.7 1182.4 759.7 1262.15"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="729.24 1244.45 750.9 1256.95 750.9 1177.2 729.24 1164.7 729.24 1244.45"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="664.29 1206.95 685.94 1219.45 685.94 1139.7 664.29 1127.2 664.29 1206.95"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="633.84 1189.25 655.49 1201.75 655.49 1122 633.84 1109.5 633.84 1189.25"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="568.89 1151.75 590.54 1164.25 590.54 1084.5 568.89 1072 568.89 1151.75"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="538.44 1134.05 560.09 1146.55 560.09 1066.8 538.44 1054.3 538.44 1134.05"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="473.49 1096.55 495.14 1109.05 495.14 1029.3 473.49 1016.8 473.49 1096.55"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="443.04 1078.85 464.69 1091.35 464.69 1011.6 443.04 999.1 443.04 1078.85"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                    <polygon
                        points="378.08 1041.35 399.74 1053.85 399.74 974.1 378.08 961.6 378.08 1041.35"
                        fill="#fff"
                        stroke="#000"
                        stroke-miterlimit="10"
                    />
                </g>
                <g id="sign">
                    <g>
                        <path
                            d="M531.2,1162.19v-3.8l8.55,4.94v8.98c-.83.44-2.04.56-3.61.35-1.58-.21-3.17-.78-4.79-1.71-2.05-1.19-3.85-2.71-5.38-4.59-1.53-1.87-2.68-3.95-3.44-6.23-.77-2.28-1.15-4.51-1.15-6.67,0-2.35.43-4.19,1.29-5.52s2.11-2,3.77-2.02c1.26-.02,2.83.51,4.71,1.59,2.44,1.41,4.34,3.09,5.72,5.06,1.37,1.96,2.25,4.1,2.65,6.39l-3.94-1.43c-.28-1.27-.8-2.44-1.56-3.52-.76-1.08-1.72-1.95-2.86-2.61-1.73-1-3.11-1.17-4.13-.5-1.02.67-1.54,2.25-1.54,4.73,0,2.68.52,4.98,1.56,6.92,1.04,1.94,2.39,3.39,4.07,4.36.83.48,1.66.77,2.5.88.84.11,1.55.07,2.15-.12v-2.86l-4.54-2.62Z"
                        />
                        <path
                            d="M549.97,1158.77l3.97,2.29v12.21c0,1.94.05,3.22.15,3.85.17,1.02.57,1.99,1.21,2.92.64.93,1.51,1.71,2.62,2.35,1.13.65,1.97.88,2.55.68.57-.2.92-.65,1.03-1.35s.17-1.94.17-3.73v-12.47l3.97,2.29v11.84c0,2.71-.11,4.56-.32,5.55-.21.99-.61,1.71-1.19,2.14-.58.44-1.35.6-2.31.5s-2.22-.6-3.78-1.5c-1.88-1.08-3.3-2.15-4.27-3.21-.97-1.06-1.74-2.14-2.3-3.27-.56-1.12-.93-2.17-1.11-3.14-.26-1.44-.39-3.42-.39-5.95v-12.03Z"
                        />
                        <path
                            d="M576.4,1196.58v-22.55l14.57,8.41v3.81l-10.6-6.12v5l9.86,5.69v3.8l-9.86-5.69v6.13l10.98,6.34v3.8l-14.94-8.63Z"
                        />
                        <path
                            d="M600.29,1203.04l3.86,1.8c.23,1.62.7,2.99,1.41,4.09.71,1.11,1.67,2.01,2.88,2.71,1.28.74,2.24.98,2.89.74.65-.25.97-.79.97-1.62,0-.53-.14-1.07-.41-1.6-.27-.53-.75-1.13-1.43-1.8-.46-.45-1.52-1.39-3.18-2.82-2.13-1.83-3.62-3.44-4.48-4.81-1.21-1.94-1.81-3.8-1.81-5.58,0-1.15.28-2.06.85-2.73s1.38-.96,2.45-.87c1.07.09,2.36.58,3.87,1.45,2.46,1.42,4.32,3.12,5.57,5.08,1.25,1.96,1.9,3.99,1.96,6.1l-3.97-2.09c-.17-1.26-.53-2.3-1.09-3.13s-1.4-1.57-2.51-2.21c-1.15-.67-2.05-.91-2.71-.75-.42.11-.63.45-.63,1.04,0,.53.2,1.1.59,1.71.5.77,1.72,1.97,3.65,3.61,1.93,1.64,3.36,3,4.28,4.09.92,1.09,1.65,2.28,2.17,3.54.52,1.27.78,2.62.78,4.04,0,1.29-.31,2.32-.94,3.09-.63.77-1.51,1.09-2.65.98-1.14-.11-2.57-.66-4.27-1.65-2.48-1.43-4.39-3.19-5.72-5.28s-2.13-4.46-2.38-7.14Z"
                        />
                        <path
                            d="M630.62,1227.88v-18.73l-5.83-3.37v-3.81l15.61,9.02v3.81l-5.82-3.36v18.73l-3.97-2.29Z"
                        />
                        <path
                            d="M649.56,1238.82v-22.55l3.97,2.29v8.87l7.77,4.49v-8.87l3.97,2.29v22.54l-3.97-2.29v-9.86l-7.77-4.49v9.86l-3.97-2.29Z"
                        />
                        <path
                            d="M675.15,1242.46c0-2.3.3-4.05.9-5.26.45-.89,1.06-1.57,1.83-2.04.77-.47,1.62-.65,2.54-.56,1.22.11,2.64.63,4.24,1.55,2.89,1.67,5.21,4.04,6.95,7.1,1.74,3.06,2.61,6.43,2.61,10.1s-.86,5.99-2.59,7.05-4.03.76-6.92-.91c-2.92-1.69-5.24-4.05-6.97-7.09s-2.59-6.36-2.59-9.94ZM679.24,1244.67c0,2.55.51,4.78,1.54,6.7,1.03,1.91,2.33,3.32,3.91,4.23,1.58.91,2.88,1.01,3.89.29,1.01-.72,1.52-2.39,1.52-5s-.49-4.8-1.48-6.64c-.99-1.84-2.3-3.23-3.93-4.18-1.63-.94-2.95-1.06-3.95-.35s-1.5,2.36-1.5,4.96Z"
                        />
                        <path
                            d="M703.87,1247.63l3.97,2.29v12.21c0,1.94.05,3.22.15,3.85.17,1.02.57,1.99,1.21,2.92s1.51,1.71,2.62,2.35c1.13.65,1.97.88,2.55.68.57-.2.92-.65,1.03-1.35s.17-1.94.17-3.73v-12.47l3.97,2.29v11.84c0,2.71-.11,4.56-.32,5.55-.21.99-.61,1.71-1.19,2.14-.58.44-1.35.6-2.31.5-.97-.1-2.22-.6-3.78-1.5-1.88-1.08-3.3-2.15-4.27-3.21-.97-1.06-1.74-2.14-2.3-3.27-.56-1.12-.93-2.17-1.11-3.14-.26-1.44-.39-3.42-.39-5.95v-12.03Z"
                        />
                        <path
                            d="M729.3,1277.52l3.86,1.8c.23,1.62.7,2.98,1.41,4.09s1.67,2.01,2.88,2.71c1.28.74,2.24.98,2.89.74.65-.25.97-.78.97-1.62,0-.53-.14-1.07-.41-1.6-.27-.53-.75-1.13-1.43-1.8-.46-.45-1.52-1.39-3.18-2.82-2.13-1.83-3.62-3.44-4.48-4.81-1.21-1.94-1.81-3.8-1.81-5.58,0-1.15.28-2.06.85-2.73.57-.67,1.38-.96,2.45-.87,1.07.09,2.36.58,3.87,1.45,2.46,1.42,4.32,3.12,5.57,5.08,1.25,1.96,1.9,3.99,1.96,6.1l-3.97-2.09c-.17-1.26-.53-2.3-1.09-3.13-.56-.83-1.4-1.57-2.51-2.21-1.15-.67-2.05-.92-2.71-.75-.42.11-.63.45-.63,1.04,0,.53.2,1.1.59,1.71.5.77,1.72,1.97,3.65,3.61,1.93,1.64,3.36,3,4.28,4.09s1.65,2.27,2.17,3.54c.52,1.27.78,2.62.78,4.04,0,1.29-.31,2.32-.94,3.09-.63.77-1.51,1.09-2.65.98-1.14-.11-2.57-.66-4.28-1.64-2.48-1.43-4.39-3.2-5.72-5.28s-2.13-4.46-2.38-7.14Z"
                        />
                        <path
                            d="M755.2,1299.81v-22.54l14.57,8.41v3.81l-10.6-6.12v5l9.86,5.69v3.8l-9.86-5.69v6.14l10.98,6.34v3.8l-14.94-8.63Z"
                        />
                    </g>
                    <g>
                        <path
                            d="M902.14,1376.25l3.85,3.62c-.59,2.12-1.57,3.38-2.94,3.78-1.37.4-3.11,0-5.22-1.22-2.61-1.51-4.75-3.77-6.43-6.78-1.68-3.01-2.52-6.3-2.52-9.84,0-3.75.84-6.18,2.53-7.28,1.69-1.1,3.91-.86,6.66.73,2.4,1.39,4.36,3.33,5.86,5.83.89,1.48,1.56,3.25,2.01,5.31l-3.93-1.19c-.23-1.3-.72-2.51-1.45-3.61-.74-1.1-1.63-1.96-2.69-2.57-1.46-.84-2.64-.92-3.54-.25-.91.68-1.36,2.36-1.36,5.04,0,2.85.45,5.14,1.34,6.86.89,1.73,2.05,3,3.48,3.83,1.05.61,1.96.75,2.72.42s1.3-1.23,1.64-2.68Z"
                        />
                        <path
                            d="M933.7,1402.76l-4.32-2.49-1.72-6.11-7.85-4.54-1.62,4.19-4.21-2.43,7.65-18.13,4.19,2.42,7.87,27.09ZM926.39,1389.62l-2.71-9.93-2.65,6.83,5.36,3.09Z"
                        />
                        <path
                            d="M942.42,1407.79v-22.55l13.47,7.78v3.81l-9.5-5.49v5.34l8.2,4.74v3.81l-8.2-4.74v9.58l-3.97-2.29Z"
                        />
                        <path
                            d="M965.74,1421.26v-22.54l14.57,8.41v3.81l-10.6-6.12v5l9.86,5.69v3.8l-9.86-5.69v6.14l10.98,6.34v3.8l-14.94-8.63Z"
                        />
                    </g>
                </g>
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
    opacity: 0.2;
}
</style>
