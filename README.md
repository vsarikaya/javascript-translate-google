# Javascript - Google Translate

Google translate without any api key

**Include Js File**
```
<script type="text/javascript" src="_translate.min.js" charset="UTF-8"></script>
```

**Translate Function**
```javascript
/**
 * Translate from google translate
 *
 * @param string text
 * @param string targetLanguage (DEFAULT tr)
 * @param string sourceLanguage (DEFAULT auto)
 *
 * @return {Promise}
 */
 _translate.translateText(text, targetLanguage, sourceLanguage);
```

**Translate**
```javascript
/**
 * Default: Translate to Turkish (tr) language
 * Default: Auto detection source language
 */
_translate.translateText('Hi. How are you?').then(function(data){
    // Actions
    console.dir(data);
});
```

**Result**
```javascript
Object
    originalText : "Hi. How are you?"
    sourceLang : "en"
    targetLang : "tr"
    text : "Merhaba. Nasılsın?"
```
