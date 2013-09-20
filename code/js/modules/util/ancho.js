define({
 "api": [
  {
   "id": "chrome.browserAction",
   "types": [
    {
     "id": "ImageDataType",
     "type": "imagedata"
    },
    {
     "id": "ColorArray",
     "type": {
      "items": "integer",
      "type": "array"
     }
    }
   ],
   "methods": [
    {
     "id": "enable",
     "items": [
      {
       "id": "tabId",
       "required": false,
       "type": "integer"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setBadgeBackgroundColor",
     "items": [
      {
       "id": "details",
       "properties": {
        "color": {
         "id": "color",
         "required": true,
         "type": [
          "ColorArray",
          "string"
         ]
        },
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setBadgeText",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        },
        "text": {
         "id": "text",
         "required": true,
         "type": "string"
        }
       },
       "required": true,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setTitle",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        },
        "title": {
         "id": "title",
         "required": true,
         "type": "string"
        }
       },
       "required": true,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getBadgeText",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "result": {
         "id": "result",
         "required": true,
         "type": "string"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setPopup",
     "items": [
      {
       "id": "details",
       "properties": {
        "popup": {
         "id": "popup",
         "required": true,
         "type": "string"
        },
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "disable",
     "items": [
      {
       "id": "tabId",
       "required": false,
       "type": "integer"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getTitle",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "result": {
         "id": "result",
         "required": true,
         "type": "string"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getBadgeBackgroundColor",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "result": {
         "id": "result",
         "required": true,
         "type": "ColorArray"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getPopup",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "result": {
         "id": "result",
         "required": true,
         "type": "string"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setIcon",
     "items": [
      {
       "id": "details",
       "properties": {
        "imageData": {
         "id": "imageData",
         "required": false,
         "type": [
          "ImageDataType",
          "object"
         ]
        },
        "path": {
         "id": "path",
         "required": false,
         "type": [
          "string",
          "object"
         ]
        },
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.cookies",
   "types": [
    {
     "id": "Cookie",
     "properties": {
      "domain": {
       "id": "domain",
       "required": true,
       "type": "string"
      },
      "expirationDate": {
       "id": "expirationDate",
       "required": false,
       "type": "double"
      },
      "hostOnly": {
       "id": "hostOnly",
       "required": true,
       "type": "boolean"
      },
      "httpOnly": {
       "id": "httpOnly",
       "required": true,
       "type": "boolean"
      },
      "name": {
       "id": "name",
       "required": true,
       "type": "string"
      },
      "path": {
       "id": "path",
       "required": true,
       "type": "string"
      },
      "secure": {
       "id": "secure",
       "required": true,
       "type": "boolean"
      },
      "session": {
       "id": "session",
       "required": true,
       "type": "boolean"
      },
      "storeId": {
       "id": "storeId",
       "required": true,
       "type": "string"
      },
      "value": {
       "id": "value",
       "required": true,
       "type": "string"
      }
     },
     "type": "object"
    },
    {
     "id": "CookieStore",
     "properties": {
      "id": {
       "id": "id",
       "required": true,
       "type": "string"
      },
      "tabIds": {
       "id": "tabIds",
       "required": true,
       "type": {
        "items": "integer",
        "type": "array"
       }
      }
     },
     "type": "object"
    }
   ],
   "methods": [
    {
     "id": "getAll",
     "items": [
      {
       "id": "details",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getAllCookieStores",
     "items": [
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "set",
     "items": [
      {
       "id": "details",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "remove",
     "items": [
      {
       "id": "details",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "get",
     "items": [
      {
       "id": "details",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.extension",
   "types": [
    {
     "id": "MessageSender",
     "properties": {
      "id": {
       "id": "id",
       "required": true,
       "type": "string"
      },
      "tab": {
       "id": "tab",
       "required": false,
       "type": "tabs.Tab"
      }
     },
     "type": "object"
    },
    {
     "id": "Port",
     "properties": {
      "name": {
       "id": "name",
       "required": true,
       "type": "string"
      },
      "onDisconnect": {
       "id": "onDisconnect",
       "required": true,
       "type": "events.Event"
      },
      "onMessage": {
       "id": "onMessage",
       "required": true,
       "type": "events.Event"
      },
      "postMessage": {
       "id": "postMessage",
       "required": true,
       "type": "function"
      },
      "sender": {
       "id": "sender",
       "required": false,
       "type": "MessageSender"
      }
     },
     "type": "object"
    }
   ],
   "methods": [
    {
     "id": "connect",
     "items": [
      {
       "id": "extensionId",
       "required": false,
       "type": "string"
      },
      {
       "id": "connectInfo",
       "properties": {
        "name": {
         "id": "name",
         "required": false,
         "type": "string"
        }
       },
       "required": false,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "sendMessage",
     "items": [
      {
       "id": "extensionId",
       "required": false,
       "type": "string"
      },
      {
       "id": "message",
       "required": true,
       "type": "any"
      },
      {
       "id": "responseCallback",
       "properties": {
        "response": {
         "id": "response",
         "required": true,
         "type": "any"
        }
       },
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getURL",
     "items": [
      {
       "id": "path",
       "required": true,
       "type": "string"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getViews",
     "items": [
      {
       "id": "fetchProperties",
       "properties": {
        "type": {
         "id": "type",
         "required": false,
         "type": {
          "enum": [
           "tab",
           "infobar",
           "notification",
           "popup"
          ],
          "type": "enumerated string"
         }
        },
        "windowId": {
         "id": "windowId",
         "required": false,
         "type": "integer"
        }
       },
       "required": false,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getBackgroundPage",
     "items": [],
     "type": "functionArguments"
    },
    {
     "id": "isAllowedIncognitoAccess",
     "items": [
      {
       "id": "callback",
       "properties": {
        "isAllowedAccess": {
         "id": "isAllowedAccess",
         "required": true,
         "type": "boolean"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "isAllowedFileSchemeAccess",
     "items": [
      {
       "id": "callback",
       "properties": {
        "isAllowedAccess": {
         "id": "isAllowedAccess",
         "required": true,
         "type": "boolean"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setUpdateUrlData",
     "items": [
      {
       "id": "data",
       "required": true,
       "type": "string"
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.i18n",
   "methods": [
    {
     "id": "getAcceptLanguages",
     "items": [
      {
       "id": "callback",
       "properties": {
        "languages": {
         "id": "languages",
         "required": true,
         "type": {
          "items": "string",
          "type": "array"
         }
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getMessage",
     "items": [
      {
       "id": "messageName",
       "required": true,
       "type": "string"
      },
      {
       "id": "substitutions",
       "required": false,
       "type": "any"
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.pageAction",
   "types": [
    {
     "id": "ImageDataType",
     "type": "imagedata"
    }
   ],
   "methods": [
    {
     "id": "show",
     "items": [
      {
       "id": "tabId",
       "required": true,
       "type": "integer"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "hide",
     "items": [
      {
       "id": "tabId",
       "required": true,
       "type": "integer"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setTitle",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": true,
         "type": "integer"
        },
        "title": {
         "id": "title",
         "required": true,
         "type": "string"
        }
       },
       "required": true,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getTitle",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": true,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setIcon",
     "items": [
      {
       "id": "details",
       "properties": {
        "imageData": {
         "id": "imageData",
         "required": false,
         "type": [
          "ImageDataType",
          "object"
         ]
        },
        "path": {
         "id": "path",
         "required": false,
         "type": [
          "string",
          "object"
         ]
        },
        "tabId": {
         "id": "tabId",
         "required": true,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "setPopup",
     "items": [
      {
       "id": "details",
       "properties": {
        "popup": {
         "id": "popup",
         "required": true,
         "type": "string"
        },
        "tabId": {
         "id": "tabId",
         "required": true,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getPopup",
     "items": [
      {
       "id": "details",
       "properties": {
        "tabId": {
         "id": "tabId",
         "required": true,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.storage",
   "types": [
    {
     "id": "StorageChange",
     "properties": {
      "newValue": {
       "id": "newValue",
       "required": false,
       "type": "any"
      },
      "oldValue": {
       "id": "oldValue",
       "required": false,
       "type": "any"
      }
     },
     "type": "object"
    },
    {
     "id": "StorageArea",
     "type": "object"
    }
   ],
   "methods": [
    {
     "id": "get",
     "items": [
      {
       "id": "keys",
       "type": [
        "string",
        {
         "items": "string",
         "type": "array"
        },
        "object"
       ]
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getBytesInUse",
     "items": [
      {
       "id": "keys",
       "type": [
        "string",
        {
         "items": "string",
         "type": "array"
        }
       ]
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "set",
     "items": [
      {
       "id": "items",
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "remove",
     "items": [
      {
       "id": "keys",
       "type": [
        "string",
        {
         "items": "string",
         "type": "array"
        }
       ]
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "clear",
     "items": [
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.tabs",
   "types": [
    {
     "id": "Tab",
     "properties": {
      "active": {
       "id": "active",
       "required": true,
       "type": "boolean"
      },
      "favIconUrl": {
       "id": "favIconUrl",
       "required": false,
       "type": "string"
      },
      "highlighted": {
       "id": "highlighted",
       "required": true,
       "type": "boolean"
      },
      "id": {
       "id": "id",
       "required": true,
       "type": "integer"
      },
      "incognito": {
       "id": "incognito",
       "required": true,
       "type": "boolean"
      },
      "index": {
       "id": "index",
       "required": true,
       "type": "integer"
      },
      "openerTabId": {
       "id": "openerTabId",
       "required": false,
       "type": "integer"
      },
      "pinned": {
       "id": "pinned",
       "required": true,
       "type": "boolean"
      },
      "status": {
       "id": "status",
       "required": false,
       "type": "string"
      },
      "title": {
       "id": "title",
       "required": false,
       "type": "string"
      },
      "url": {
       "id": "url",
       "required": true,
       "type": "string"
      },
      "windowId": {
       "id": "windowId",
       "required": true,
       "type": "integer"
      }
     },
     "type": "object"
    },
    {
     "id": "InjectDetails",
     "properties": {
      "allFrames": {
       "id": "allFrames",
       "required": false,
       "type": "boolean"
      },
      "code": {
       "id": "code",
       "required": false,
       "type": "string"
      },
      "file": {
       "id": "file",
       "required": false,
       "type": "string"
      },
      "runAt": {
       "id": "runAt",
       "required": false,
       "type": {
        "enum": [
         "document_start",
         "document_end",
         "document_idle"
        ],
        "type": "enumerated string"
       }
      }
     },
     "type": "object"
    }
   ],
   "methods": [
    {
     "id": "executeScript",
     "items": [
      {
       "id": "tabId",
       "required": false,
       "type": "integer"
      },
      {
       "id": "details",
       "required": true,
       "type": "InjectDetails"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "get",
     "items": [
      {
       "id": "tabId",
       "required": true,
       "type": "integer"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getCurrent",
     "items": [
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "create",
     "items": [
      {
       "id": "createProperties",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "move",
     "items": [
      {
       "id": "tabIds",
       "required": true,
       "type": [
        {
         "items": "integer",
         "type": "array"
        },
        "integer"
       ]
      },
      {
       "id": "moveProperties",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "update",
     "items": [
      {
       "id": "tabId",
       "required": false,
       "type": "integer"
      },
      {
       "id": "updateProperties",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "remove",
     "items": [
      {
       "id": "tabIds",
       "required": true,
       "type": [
        {
         "items": "integer",
         "type": "array"
        },
        "integer"
       ]
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "captureVisibleTab",
     "items": [
      {
       "id": "windowId",
       "required": false,
       "type": "integer"
      },
      {
       "id": "options",
       "required": false,
       "type": "object"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "reload",
     "items": [
      {
       "id": "tabId",
       "required": false,
       "type": "integer"
      },
      {
       "id": "reloadProperties",
       "required": false,
       "type": "object"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "sendMessage",
     "items": [
      {
       "id": "tabId",
       "required": true,
       "type": "integer"
      },
      {
       "id": "message",
       "required": true,
       "type": "any"
      },
      {
       "id": "responseCallback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "connect",
     "items": [
      {
       "id": "tabId",
       "required": true,
       "type": "integer"
      },
      {
       "id": "connectInfo",
       "required": false,
       "type": "object"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "insertCSS",
     "items": [
      {
       "id": "tabId",
       "required": false,
       "type": "integer"
      },
      {
       "id": "details",
       "required": true,
       "type": "InjectDetails"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "highlight",
     "items": [
      {
       "id": "highlightInfo",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "query",
     "items": [
      {
       "id": "queryInfo",
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "detectLanguage",
     "items": [
      {
       "id": "tabId",
       "required": false,
       "type": "integer"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.webRequest",
   "types": [
    {
     "id": "RequestFilter",
     "properties": {
      "tabId": {
       "id": "tabId",
       "required": false,
       "type": "integer"
      },
      "types": {
       "id": "types",
       "required": false,
       "items": {
        "enum": [
         "main_frame",
         "sub_frame",
         "stylesheet",
         "script",
         "image",
         "object",
         "xmlhttprequest",
         "other"
        ],
        "type": "enumerated string"
       },
       "type": "array"
      },
      "urls": {
       "id": "urls",
       "required": true,
       "type": {
        "items": "string",
        "type": "array"
       }
      },
      "windowId": {
       "id": "windowId",
       "required": false,
       "type": "integer"
      }
     },
     "type": "object"
    },
    {
     "id": "HttpHeaders",
     "type": {
      "items": "object",
      "type": "array"
     }
    },
    {
     "id": "BlockingResponse",
     "properties": {
      "authCredentials": {
       "id": "authCredentials",
       "required": false,
       "type": "object"
      },
      "cancel": {
       "id": "cancel",
       "required": false,
       "type": "boolean"
      },
      "redirectUrl": {
       "id": "redirectUrl",
       "required": false,
       "type": "string"
      },
      "requestHeaders": {
       "id": "requestHeaders",
       "required": false,
       "type": "HttpHeaders"
      },
      "responseHeaders": {
       "id": "responseHeaders",
       "required": false,
       "type": "HttpHeaders"
      }
     },
     "type": "object"
    },
    {
     "id": "UploadData",
     "properties": {
      "bytes": {
       "id": "bytes",
       "required": false,
       "type": "any"
      },
      "file": {
       "id": "file",
       "required": false,
       "type": "string"
      }
     },
     "type": "object"
    }
   ],
   "methods": [
    {
     "id": "handlerBehaviorChanged",
     "items": [
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "webRequestEventInvoke",
     "items": [
      {
       "id": "eventName",
       "required": true,
       "type": "string"
      },
      {
       "id": "callback",
       "required": true,
       "type": "function"
      },
      {
       "id": "filter",
       "required": true,
       "type": "RequestFilter"
      },
      {
       "id": "opt_extraInfoSpec",
       "required": false,
       "type": {
        "items": "string",
        "type": "array"
       }
      }
     ],
     "type": "functionArguments"
    }
   ]
  },
  {
   "id": "chrome.windows",
   "types": [
    {
     "id": "Window",
     "properties": {
      "alwaysOnTop": {
       "id": "alwaysOnTop",
       "required": true,
       "type": "boolean"
      },
      "focused": {
       "id": "focused",
       "required": true,
       "type": "boolean"
      },
      "height": {
       "id": "height",
       "required": true,
       "type": "integer"
      },
      "id": {
       "id": "id",
       "required": true,
       "type": "integer"
      },
      "incognito": {
       "id": "incognito",
       "required": true,
       "type": "boolean"
      },
      "left": {
       "id": "left",
       "required": true,
       "type": "integer"
      },
      "state": {
       "id": "state",
       "required": true,
       "type": {
        "enum": [
         "normal",
         "minimized",
         "maximized",
         "fullscreen"
        ],
        "type": "enumerated string"
       }
      },
      "tabs": {
       "id": "tabs",
       "required": false,
       "type": {
        "items": "tabs.Tab",
        "type": "array"
       }
      },
      "top": {
       "id": "top",
       "required": true,
       "type": "integer"
      },
      "type": {
       "id": "type",
       "required": true,
       "type": {
        "enum": [
         "normal",
         "popup",
         "panel",
         "app"
        ],
        "type": "enumerated string"
       }
      },
      "width": {
       "id": "width",
       "required": true,
       "type": "integer"
      }
     },
     "type": "object"
    }
   ],
   "methods": [
    {
     "id": "get",
     "items": [
      {
       "id": "windowId",
       "required": true,
       "type": "integer"
      },
      {
       "id": "getInfo",
       "required": false,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "window": {
         "id": "window",
         "required": true,
         "type": "Window"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getCurrent",
     "items": [
      {
       "id": "getInfo",
       "required": false,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "window": {
         "id": "window",
         "required": true,
         "type": "Window"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "create",
     "items": [
      {
       "id": "createData",
       "properties": {
        "focused": {
         "id": "focused",
         "required": false,
         "type": "boolean"
        },
        "height": {
         "id": "height",
         "required": false,
         "type": "integer"
        },
        "incognito": {
         "id": "incognito",
         "required": false,
         "type": "boolean"
        },
        "left": {
         "id": "left",
         "required": false,
         "type": "integer"
        },
        "tabId": {
         "id": "tabId",
         "required": false,
         "type": "integer"
        },
        "top": {
         "id": "top",
         "required": false,
         "type": "integer"
        },
        "type": {
         "id": "type",
         "required": false,
         "type": {
          "enum": [
           "normal",
           "popup",
           "panel",
           "detached_panel"
          ],
          "type": "enumerated string"
         }
        },
        "url": {
         "id": "url",
         "required": false,
         "type": "string"
        },
        "width": {
         "id": "width",
         "required": false,
         "type": "integer"
        }
       },
       "required": false,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "window": {
         "id": "window",
         "required": false,
         "type": "Window"
        }
       },
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getAll",
     "items": [
      {
       "id": "getInfo",
       "required": false,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "windows": {
         "id": "windows",
         "required": true,
         "type": {
          "items": "Window",
          "type": "array"
         }
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "update",
     "items": [
      {
       "id": "windowId",
       "required": true,
       "type": "integer"
      },
      {
       "id": "updateInfo",
       "properties": {
        "drawAttention": {
         "id": "drawAttention",
         "required": false,
         "type": "boolean"
        },
        "focused": {
         "id": "focused",
         "required": false,
         "type": "boolean"
        },
        "height": {
         "id": "height",
         "required": false,
         "type": "integer"
        },
        "left": {
         "id": "left",
         "required": false,
         "type": "integer"
        },
        "state": {
         "id": "state",
         "required": false,
         "type": {
          "enum": [
           "normal",
           "minimized",
           "maximized",
           "fullscreen"
          ],
          "type": "enumerated string"
         }
        },
        "top": {
         "id": "top",
         "required": false,
         "type": "integer"
        },
        "width": {
         "id": "width",
         "required": false,
         "type": "integer"
        }
       },
       "required": true,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "window": {
         "id": "window",
         "required": true,
         "type": "Window"
        }
       },
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "remove",
     "items": [
      {
       "id": "windowId",
       "required": true,
       "type": "integer"
      },
      {
       "id": "callback",
       "required": false,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    },
    {
     "id": "getLastFocused",
     "items": [
      {
       "id": "getInfo",
       "required": false,
       "type": "object"
      },
      {
       "id": "callback",
       "properties": {
        "window": {
         "id": "window",
         "required": true,
         "type": "Window"
        }
       },
       "required": true,
       "type": "function"
      }
     ],
     "type": "functionArguments"
    }
   ]
  }
 ]
})