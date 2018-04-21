# Javascript - Google Translate

Google translate without any api key

**Include Js File**
```
  <script type="text/javascript" src="_translate.min.js" charset="UTF-8"></script>
```

**Translate**
```
  _translate.translateText('Hi. How are you?').then(function(data){
        // Actions
        console.dir(data);
  });
```

**Result**
```
Object
    originalText : "Hi. How are you?"
    sourceLang : "en"
    targetLang : "tr"
    text : "Merhaba. Nasılsın?"
```
