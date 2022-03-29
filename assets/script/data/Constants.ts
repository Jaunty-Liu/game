import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

enum EventName {
    GREETING = 'greeting',
    GOODBYE = 'goodbye',
    FINISHED_WALK = 'finished-walk',
    START_BRAKING = 'start-braking',
    END_BRAKING = 'end-braking',
    SHOW_COIN = 'show-coin',
    GAME_START = 'game-start',
    GAME_OVER = 'game-over',
    NEW_LEVEL = 'new-level',
    SHOW_TALK = 'show-talk',
    SHOW_GUIDE = 'show-guide',
    UPDATE_PROGRESS = 'update-progress',
}

enum CustomerState {
    NONE,
    GREETING,
    GOODBYE,
}

enum AudioSource {
    BACKGROUND = 'background',
    CLICK = 'click',
    CRASH = 'crash',
    GETMONEY = 'getMoney',
    INCAR = 'inCar',
    NEWORDER = 'newOrder',
    START = 'start',
    STOP = 'stop',
    TOOTING1 = 'tooting1',
    TOOTING2 = 'tooting2',
    WIN = 'win',
}

enum CarGroup {
    NORMAL = 1 << 0,
    MAIN_CAR = 1 << 1,
    OTHER_CAR = 1 << 2,
}

@ccclass("Constants")
export class Constants {
    public static EventName = EventName;
    public static CustomerState = CustomerState;
    public static AudioSource = AudioSource;
    public static CarGroup = CarGroup;
    public static talkTable = [
        {
          "id": "1502994259148701698",
          "name": "葡萄",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/03/da734248cddc4b6286ae71f9cab5b359grape.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1502994431064834050",
          "name": "面包",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/03/a973bb23042e4fa5a9422fdf5489e600Bread.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1502994499360686082",
          "name": "虾仁",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/03/584e9ae60d84407aa5aa56d9a4b2565dShrimp.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1502994577622204418",
          "name": "香蕉",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/03/01d0de41aa00405ab7a3f8583984d2c4Banana.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1502994650678591489",
          "name": "樱桃",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/03/a83af62d173142589d79436ec69f96f0Cherry.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1502994749483810818",
          "name": "鸡骨头",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/03/d8e8b508defa451db3cb6fabbb22b790Pork leg.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1507559401119281153",
          "name": "汉堡包",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/14/3aa1564430904c77b324d748ed6773d9F_HAMBAGA.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1507560374608850945",
          "name": "虾",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/14/3adb8a1f7e8049979993139847679fcaF_EBI.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1507984269778305026",
          "name": "玉米",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/03/03/d0dea8fa37c1437fae99dba775ef834ccorn.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1508755378152804354",
          "name": "牛排",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/ac7be28863a14b4c9a773bdd0d486281%E3%82%B9%E3%83%86%E3%83%BC%E3%82%AD.png",
          "collect": "厨余垃圾"
        },
        {
          "id": "1508752487656591362",
          "name": "电话",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/081e5fe387494a67ba529eda6440e746B_DENWA.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508752984908107777",
          "name": "布制品（帽子）",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/23318eea7d934b2385c3ead6862ff3b9B_KOBAN.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508753131641638914",
          "name": "平底锅",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/2cbb3cf726b94a53a774d0e91d45b6f8%E7%84%BC%E3%81%8F.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508753403306708993",
          "name": "购物袋",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/457f2aab233e47aaafaa37b77a88c074B_BAITEN.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508753520931770370",
          "name": "纸团",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/5bec8408402448f89f5f89a99d253c11B_KANEN.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508753665568149505",
          "name": "电子设备（相机）",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/625a7bbf89d54a4e8a56699c369d8235B_FUOTO-SUPOTTO.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508754329748770817",
          "name": "刀",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/656f35a168d2472594bb2c5b828f31ceH_SAMURAI.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508754479229571073",
          "name": "金属制品（剪刀）",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/68a00ac01f9d46be918ea295ed1aa947iron.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508754985087799298",
          "name": "放大镜",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/820d57325fe64a65aa0974ac95161671.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508755148850204673",
          "name": "玻璃瓶",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/921679ca46f74ac6a0ae2d22b3561f9fB_BIN.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508755256354410498",
          "name": "塑料制品（梳子）",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/a44622532a184658bb7100f8c3c23f3d%E5%A1%91%E6%96%99.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508755497883406338",
          "name": "塑料瓶",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/ac90c341742d4d158aba8b676bd3ec6eB_PETTOBOTORU.png",
          "collect": "可回收垃圾"
        },
        {
          "id": "1508754721844891649",
          "name": "口罩",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/7ea9d966bdff4b1cb176f28b043e2eddC_MASUKU.png",
          "collect": "有害垃圾"
        },
        {
          "id": "1508755639801876482",
          "name": "药品",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/e0529d77dc184fb0b89f01075d95b3f7B_YAKKYOKU.png",
          "collect": "有害垃圾"
        },
        {
          "id": "1508752796583858177",
          "name": "陶瓷制品（花瓶）",
          "url": "https://hl-edu-1010.oss-cn-beijing.aliyuncs.com/2022/207c725c9fc740718ceeeb689a034f5cF_IZAKAYA.png",
          "collect": "其他垃圾"
        }
    ];

    public static UIPage = {
        mainUI: 'mainUI',
        gameUI: 'gameUI',
        resultUI: 'resultUI',
    };

    public static GameConfigID = 'TAXI_GAME_CACHE';
    public static PlayerConfigID = 'playerInfo';
    public static MaxLevel = 20;
}
