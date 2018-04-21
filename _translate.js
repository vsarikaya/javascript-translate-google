const _translate = {

    // Translate source url
    translateSourceUrl: "https://translate.googleapis.com/translate_a/single?client=gtx&sl={SOURCE_LANG}&tl={TARGET_LANG}&dt=t&q={TEXT}",

    /**
     * Encapsulation
     *
     * @returns {string}
     */
    getTranslateSourceUrl: function () {
        return this.translateSourceUrl;
    },

    /**
     * Merge all sentences
     *
     * @returns {string}
     */
    mergeSentences: function (data) {
        return data.map(function(item) { return item[0]; }).join("");
    },

    /**
     * Generate google translate link
     *
     * @param text
     * @param target
     * @param source
     * @returns {string}
     */
    generatePostUrl: function (text, target, source) {
        return this.getTranslateSourceUrl()
            .replace("{SOURCE_LANG}", source)
            .replace("{TARGET_LANG}", target)
            .replace("{TEXT}", encodeURI(text))
            .toString();
    },

    /**
     * Translate from google translate
     *
     * @param text
     * @param target
     * @param source
     * @returns {Promise}
     */
    translateText: function (text, target, source) {
        if(text === "") return "";

        let sourceLang = source ? source : 'auto';
        let targetLang = target ? target : 'tr';

        // Generate post url with query string
        let queryString = this.generatePostUrl(text, targetLang, sourceLang);

        let _this = this;
        return fetch(queryString)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                return {
                    sourceLang: data[2],
                    targetLang: targetLang,
                    originalText: text,
                    text: _this.mergeSentences(data[0]),
                };
            })
            .catch(function (error) {
                return Promise.reject(Error(error))
            });
    }
};