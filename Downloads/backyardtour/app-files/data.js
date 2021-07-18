var APP_DATA = {
  "scenes": [
    {
      "id": "0-1door",
      "name": "1Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.071578988920704,
        "pitch": 0.2918753821371425,
        "fov": 1.1887029286416593
      },
      "linkHotspots": [
        {
          "yaw": 1.8540014607576412,
          "pitch": 0.3868589715362756,
          "rotation": 0,
          "target": "1-2bbq"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2bbq",
      "name": "2BBq",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8664223311796206,
          "pitch": 0.41932165941707567,
          "rotation": 0,
          "target": "2-3midec"
        },
        {
          "yaw": 1.8427275170846018,
          "pitch": 0.4061489947195671,
          "rotation": 0,
          "target": "0-1door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3midec",
      "name": "3Midec",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8713323090059397,
          "pitch": 0.43150998051235057,
          "rotation": 0,
          "target": "1-2bbq"
        },
        {
          "yaw": 0.019393574155193605,
          "pitch": 0.4588148608807785,
          "rotation": 0,
          "target": "4-5chair"
        },
        {
          "yaw": 1.46626592539155,
          "pitch": 0.4895956265079988,
          "rotation": 0,
          "target": "3-4downdec"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4downdec",
      "name": "4Downdec",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.454414726972015,
          "pitch": 0.20510087511571484,
          "rotation": 0,
          "target": "5-6play"
        },
        {
          "yaw": 2.9639150023397605,
          "pitch": 0.30195677147652233,
          "rotation": 0,
          "target": "2-3midec"
        },
        {
          "yaw": -0.269048886443116,
          "pitch": 0.1890373470146436,
          "rotation": 0,
          "target": "8-9midyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5chair",
      "name": "5Chair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6764701389394663,
          "pitch": 0.3060791692874467,
          "rotation": 0,
          "target": "2-3midec"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6play",
      "name": "6Play",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6581252609727049,
          "pitch": 0.21931173021073747,
          "rotation": 0,
          "target": "6-7bush"
        },
        {
          "yaw": -2.5038380628197174,
          "pitch": 0.16179700325613666,
          "rotation": 0,
          "target": "3-4downdec"
        },
        {
          "yaw": 2.8534629057492413,
          "pitch": 0.2715603031417899,
          "rotation": 0,
          "target": "8-9midyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7bush",
      "name": "7Bush",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6488033084662383,
          "pitch": 0.1518421652440125,
          "rotation": 0,
          "target": "7-8pad"
        },
        {
          "yaw": 2.9132453500681414,
          "pitch": 0.18769970015797632,
          "rotation": 0,
          "target": "8-9midyard"
        },
        {
          "yaw": -2.3388988822190733,
          "pitch": 0.15103258222221605,
          "rotation": 0,
          "target": "5-6play"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8pad",
      "name": "8Pad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.650928045871707,
          "pitch": 0.1259871749319359,
          "rotation": 0,
          "target": "6-7bush"
        },
        {
          "yaw": 1.7097218316102882,
          "pitch": 0.15525752280092675,
          "rotation": 0,
          "target": "8-9midyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9midyard",
      "name": "9MidYard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.69476236234899,
          "pitch": 0.15033871734267734,
          "rotation": 0,
          "target": "6-7bush"
        },
        {
          "yaw": -2.59897535365851,
          "pitch": 0.15865121095924906,
          "rotation": 0,
          "target": "7-8pad"
        },
        {
          "yaw": 0.2702885631617846,
          "pitch": 0.17265637275395207,
          "rotation": 0,
          "target": "3-4downdec"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BackyardTour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
