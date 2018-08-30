var _isEPub = false;
var _isApp = false;

var __base64Images = [];
__base64Images["/org/opensourcephysics/resources/controls/images/pause.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAMyWLrcPEEABaWrs+ArrO7ZMwzLSF5RtjXr6rxwjAZqQKOeW6YUz/q6Xs7XABgXxpDMkQAAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7";
__base64Images["./prob03_12/prob03_12.png"]="data:image/png;base64,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";
__base64Images["/org/opensourcephysics/resources/controls/images/stepforward.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAM6WLrcO0GAAoUYYL444XDKYHUZSA0fZYYcFV1O1QWYtt54HASdsMoumE4StKQ2xEqtAUSVQBmNLWdKAAAh/k9Db3B5cmlnaHQgMjAwMCBieSBTdW4gTWljcm9zeXN0ZW1zLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuDQpKTEYgR1IgVmVyIDEuMA0KADs=";
__base64Images["/org/opensourcephysics/resources/controls/images/play.gif"]="data:image/gif;base64,R0lGODlhEAAQAKL/AP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAQAMsWLrcPkHIAYBTUIzbBrXcMghhF01l9pUFyBbbiwUxm2n2iXL3ytMVW1BWSgAAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7";
__base64Images["/org/opensourcephysics/resources/controls/images/reset.gif"]="data:image/gif;base64,R0lGODlhEAAQAIcAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///87OzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAANgALAAAAAAQABAAAAheALEJHMhioMGDAq8URIiQhaCFDAleeRhR4kQWGDMeZHGl48OOICEK5HgxI0aFGy9eW7nSoUhsLq8ZjLmRhUyCD2/O1AkzJ0OeNE0KPWlzJMijIXUOFcoTG8unLA0GBAA7";