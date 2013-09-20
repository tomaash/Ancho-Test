define({
   "api": [
    {
     "id": "chrome.alarms",
     "methods": [
      {
       "id": "create"
      },
      {
       "id": "get"
      },
      {
       "id": "getAll"
      },
      {
       "id": "clear"
      },
      {
       "id": "clearAll"
      }
     ]
    },
    {
     "id": "chrome.bookmarks",
     "methods": [
      {
       "id": "get"
      },
      {
       "id": "getChildren"
      },
      {
       "id": "getRecent"
      },
      {
       "id": "getTree"
      },
      {
       "id": "getSubTree"
      },
      {
       "id": "search"
      },
      {
       "id": "create"
      },
      {
       "id": "move"
      },
      {
       "id": "update"
      },
      {
       "id": "remove"
      },
      {
       "id": "removeTree"
      }
     ]
    },
    {
     "id": "chrome.browserAction",
     "methods": [
      {
       "id": "setTitle"
      },
      {
       "id": "getTitle"
      },
      {
       "id": "setIcon"
      },
      {
       "id": "setPopup"
      },
      {
       "id": "getPopup"
      },
      {
       "id": "setBadgeText"
      },
      {
       "id": "getBadgeText"
      },
      {
       "id": "setBadgeBackgroundColor"
      },
      {
       "id": "getBadgeBackgroundColor"
      },
      {
       "id": "enable"
      },
      {
       "id": "disable"
      }
     ]
    },
    {
     "id": "chrome.browsingData",
     "methods": [
      {
       "id": "settings"
      },
      {
       "id": "remove"
      },
      {
       "id": "removeAppcache"
      },
      {
       "id": "removeCache"
      },
      {
       "id": "removeCookies"
      },
      {
       "id": "removeDownloads"
      },
      {
       "id": "removeFileSystems"
      },
      {
       "id": "removeFormData"
      },
      {
       "id": "removeHistory"
      },
      {
       "id": "removeIndexedDB"
      },
      {
       "id": "removeLocalStorage"
      },
      {
       "id": "removePluginData"
      },
      {
       "id": "removePasswords"
      },
      {
       "id": "removeWebSQL"
      }
     ]
    },
    {
     "id": "chrome.commands",
     "methods": [
      {
       "id": "getAll"
      }
     ]
    },
    {
     "id": "chrome.contentSettings",
     "methods": [
      {
       "id": "clear"
      },
      {
       "id": "get"
      },
      {
       "id": "set"
      },
      {
       "id": "getResourceIdentifiers"
      }
     ]
    },
    {
     "id": "chrome.contextMenus",
     "methods": [
      {
       "id": "create"
      },
      {
       "id": "update"
      },
      {
       "id": "remove"
      },
      {
       "id": "removeAll"
      }
     ]
    },
    {
     "id": "chrome.cookies",
     "methods": [
      {
       "id": "get"
      },
      {
       "id": "getAll"
      },
      {
       "id": "set"
      },
      {
       "id": "remove"
      },
      {
       "id": "getAllCookieStores"
      }
     ]
    },
    {
     "id": "chrome.debugger",
     "methods": [
      {
       "id": "attach"
      },
      {
       "id": "detach"
      },
      {
       "id": "sendCommand"
      },
      {
       "id": "getTargets"
      }
     ]
    },
    {
     "id": "chrome.declarativeWebRequest",
     "methods": []
    },
    {
     "id": "chrome.devtools.inspectedWindow",
     "methods": [
      {
       "id": "getContent"
      },
      {
       "id": "setContent"
      },
      {
       "id": "eval"
      },
      {
       "id": "reload"
      },
      {
       "id": "getResources"
      }
     ]
    },
    {
     "id": "chrome.devtools.network",
     "methods": [
      {
       "id": "getContent"
      },
      {
       "id": "getHAR"
      }
     ]
    },
    {
     "id": "chrome.devtools.panels",
     "methods": [
      {
       "id": "createSidebarPane"
      },
      {
       "id": "createStatusBarButton"
      },
      {
       "id": "setHeight"
      },
      {
       "id": "setExpression"
      },
      {
       "id": "setObject"
      },
      {
       "id": "setPage"
      },
      {
       "id": "update"
      },
      {
       "id": "create"
      },
      {
       "id": "setOpenResourceHandler"
      }
     ]
    },
    {
     "id": "chrome.downloads",
     "methods": [
      {
       "id": "download"
      },
      {
       "id": "search"
      },
      {
       "id": "pause"
      },
      {
       "id": "resume"
      },
      {
       "id": "cancel"
      },
      {
       "id": "getFileIcon"
      },
      {
       "id": "open"
      },
      {
       "id": "show"
      },
      {
       "id": "showDefaultFolder"
      },
      {
       "id": "erase"
      },
      {
       "id": "removeFile"
      },
      {
       "id": "acceptDanger"
      },
      {
       "id": "drag"
      },
      {
       "id": "setShelfEnabled"
      }
     ]
    },
    {
     "id": "chrome.events",
     "methods": [
      {
       "id": "addListener"
      },
      {
       "id": "removeListener"
      },
      {
       "id": "hasListener"
      },
      {
       "id": "hasListeners"
      },
      {
       "id": "addRules"
      },
      {
       "id": "getRules"
      },
      {
       "id": "removeRules"
      }
     ]
    },
    {
     "id": "chrome.extension",
     "methods": [
      {
       "id": "getURL"
      },
      {
       "id": "getViews"
      },
      {
       "id": "getBackgroundPage"
      },
      {
       "id": "isAllowedIncognitoAccess"
      },
      {
       "id": "isAllowedFileSchemeAccess"
      },
      {
       "id": "setUpdateUrlData"
      }
     ]
    },
    {
     "id": "chrome.fileBrowserHandler",
     "methods": [
      {
       "id": "selectFile"
      }
     ]
    },
    {
     "id": "chrome.fontSettings",
     "methods": [
      {
       "id": "clearFont"
      },
      {
       "id": "getFont"
      },
      {
       "id": "setFont"
      },
      {
       "id": "getFontList"
      },
      {
       "id": "clearDefaultFontSize"
      },
      {
       "id": "getDefaultFontSize"
      },
      {
       "id": "setDefaultFontSize"
      },
      {
       "id": "clearDefaultFixedFontSize"
      },
      {
       "id": "getDefaultFixedFontSize"
      },
      {
       "id": "setDefaultFixedFontSize"
      },
      {
       "id": "clearMinimumFontSize"
      },
      {
       "id": "getMinimumFontSize"
      },
      {
       "id": "setMinimumFontSize"
      }
     ]
    },
    {
     "id": "chrome.history",
     "methods": [
      {
       "id": "search"
      },
      {
       "id": "getVisits"
      },
      {
       "id": "addUrl"
      },
      {
       "id": "deleteUrl"
      },
      {
       "id": "deleteRange"
      },
      {
       "id": "deleteAll"
      }
     ]
    },
    {
     "id": "chrome.i18n",
     "methods": [
      {
       "id": "getAcceptLanguages"
      },
      {
       "id": "getMessage"
      }
     ]
    },
    {
     "id": "chrome.identity",
     "methods": [
      {
       "id": "getAuthToken"
      },
      {
       "id": "removeCachedAuthToken"
      },
      {
       "id": "launchWebAuthFlow"
      }
     ]
    },
    {
     "id": "chrome.idle",
     "methods": [
      {
       "id": "queryState"
      },
      {
       "id": "setDetectionInterval"
      }
     ]
    },
    {
     "id": "chrome.infobars",
     "methods": [
      {
       "id": "show"
      }
     ]
    },
    {
     "id": "chrome.input.ime",
     "methods": [
      {
       "id": "setComposition"
      },
      {
       "id": "clearComposition"
      },
      {
       "id": "commitText"
      },
      {
       "id": "setCandidateWindowProperties"
      },
      {
       "id": "setCandidates"
      },
      {
       "id": "setCursorPosition"
      },
      {
       "id": "setMenuItems"
      },
      {
       "id": "updateMenuItems"
      },
      {
       "id": "deleteSurroundingText"
      },
      {
       "id": "keyEventHandled"
      }
     ]
    },
    {
     "id": "chrome.location",
     "methods": [
      {
       "id": "watchLocation"
      },
      {
       "id": "clearWatch"
      }
     ]
    },
    {
     "id": "chrome.management",
     "methods": [
      {
       "id": "getAll"
      },
      {
       "id": "get"
      },
      {
       "id": "getPermissionWarningsById"
      },
      {
       "id": "getPermissionWarningsByManifest"
      },
      {
       "id": "setEnabled"
      },
      {
       "id": "uninstall"
      },
      {
       "id": "uninstallSelf"
      },
      {
       "id": "launchApp"
      }
     ]
    },
    {
     "id": "chrome.notifications",
     "methods": [
      {
       "id": "create"
      },
      {
       "id": "update"
      },
      {
       "id": "clear"
      },
      {
       "id": "getAll"
      }
     ]
    },
    {
     "id": "chrome.omnibox",
     "methods": [
      {
       "id": "setDefaultSuggestion"
      }
     ]
    },
    {
     "id": "chrome.pageAction",
     "methods": [
      {
       "id": "show"
      },
      {
       "id": "hide"
      },
      {
       "id": "setTitle"
      },
      {
       "id": "getTitle"
      },
      {
       "id": "setIcon"
      },
      {
       "id": "setPopup"
      },
      {
       "id": "getPopup"
      }
     ]
    },
    {
     "id": "chrome.pageCapture",
     "methods": [
      {
       "id": "saveAsMHTML"
      }
     ]
    },
    {
     "id": "chrome.permissions",
     "methods": [
      {
       "id": "getAll"
      },
      {
       "id": "contains"
      },
      {
       "id": "request"
      },
      {
       "id": "remove"
      }
     ]
    },
    {
     "id": "chrome.power",
     "methods": [
      {
       "id": "requestKeepAwake"
      },
      {
       "id": "releaseKeepAwake"
      }
     ]
    },
    {
     "id": "chrome.privacy",
     "methods": []
    },
    {
     "id": "chrome.processes",
     "methods": [
      {
       "id": "terminate"
      },
      {
       "id": "getProcessIdForTab"
      },
      {
       "id": "getProcessInfo"
      }
     ]
    },
    {
     "id": "chrome.proxy",
     "methods": []
    },
    {
     "id": "chrome.pushMessaging",
     "methods": [
      {
       "id": "getChannelId"
      }
     ]
    },
    {
     "id": "chrome.runtime",
     "methods": [
      {
       "id": "getBackgroundPage"
      },
      {
       "id": "getManifest"
      },
      {
       "id": "getURL"
      },
      {
       "id": "setUninstallUrl"
      },
      {
       "id": "reload"
      },
      {
       "id": "requestUpdateCheck"
      },
      {
       "id": "connect"
      },
      {
       "id": "connectNative"
      },
      {
       "id": "sendMessage"
      },
      {
       "id": "sendNativeMessage"
      },
      {
       "id": "getPlatformInfo"
      },
      {
       "id": "getPackageDirectoryEntry"
      }
     ]
    },
    {
     "id": "chrome.scriptBadge",
     "methods": [
      {
       "id": "setPopup"
      },
      {
       "id": "getPopup"
      },
      {
       "id": "getAttention"
      }
     ]
    },
    {
     "id": "chrome.sessions",
     "methods": [
      {
       "id": "getRecentlyClosed"
      },
      {
       "id": "getDevices"
      },
      {
       "id": "restore"
      }
     ]
    },
    {
     "id": "chrome.signedInDevices",
     "methods": [
      {
       "id": "get"
      }
     ]
    },
    {
     "id": "chrome.storage",
     "methods": [
      {
       "id": "get"
      },
      {
       "id": "getBytesInUse"
      },
      {
       "id": "set"
      },
      {
       "id": "remove"
      },
      {
       "id": "clear"
      }
     ]
    },
    {
     "id": "chrome.system.cpu",
     "methods": [
      {
       "id": "getInfo"
      }
     ]
    },
    {
     "id": "chrome.system.memory",
     "methods": [
      {
       "id": "getInfo"
      }
     ]
    },
    {
     "id": "chrome.system.storage",
     "methods": [
      {
       "id": "getInfo"
      },
      {
       "id": "ejectDevice"
      }
     ]
    },
    {
     "id": "chrome.tabCapture",
     "methods": [
      {
       "id": "capture"
      },
      {
       "id": "getCapturedTabs"
      }
     ]
    },
    {
     "id": "chrome.tabs",
     "methods": [
      {
       "id": "get"
      },
      {
       "id": "getCurrent"
      },
      {
       "id": "connect"
      },
      {
       "id": "sendMessage"
      },
      {
       "id": "create"
      },
      {
       "id": "duplicate"
      },
      {
       "id": "query"
      },
      {
       "id": "highlight"
      },
      {
       "id": "update"
      },
      {
       "id": "move"
      },
      {
       "id": "reload"
      },
      {
       "id": "remove"
      },
      {
       "id": "detectLanguage"
      },
      {
       "id": "captureVisibleTab"
      },
      {
       "id": "executeScript"
      },
      {
       "id": "insertCSS"
      }
     ]
    },
    {
     "id": "chrome.topSites",
     "methods": [
      {
       "id": "get"
      }
     ]
    },
    {
     "id": "chrome.tts",
     "methods": [
      {
       "id": "speak"
      },
      {
       "id": "stop"
      },
      {
       "id": "pause"
      },
      {
       "id": "resume"
      },
      {
       "id": "isSpeaking"
      },
      {
       "id": "getVoices"
      }
     ]
    },
    {
     "id": "chrome.ttsEngine",
     "methods": []
    },
    {
     "id": "chrome.types",
     "methods": [
      {
       "id": "get"
      },
      {
       "id": "set"
      },
      {
       "id": "clear"
      }
     ]
    },
    {
     "id": "chrome.webNavigation",
     "methods": [
      {
       "id": "getFrame"
      },
      {
       "id": "getAllFrames"
      }
     ]
    },
    {
     "id": "chrome.webRequest",
     "methods": [
      {
       "id": "handlerBehaviorChanged"
      }
     ]
    },
    {
     "id": "chrome.webstore",
     "methods": [
      {
       "id": "install"
      }
     ]
    },
    {
     "id": "chrome.windows",
     "methods": [
      {
       "id": "get"
      },
      {
       "id": "getCurrent"
      },
      {
       "id": "getLastFocused"
      },
      {
       "id": "getAll"
      },
      {
       "id": "create"
      },
      {
       "id": "update"
      },
      {
       "id": "remove"
      }
     ]
    }
   ]
})