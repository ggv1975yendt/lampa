Lampa.Listener.follow('collection_sources', function () {
    Lampa.CollectionSources.push(
        {
            id: 'filmix',
            name: 'Filmix',
            collectionsListUrl: '../filmix/',
            fullCollectionBaseUrl: '../details',
            img: 'https://playmusic.com.ua/wp-content/uploads/2024/04/filmix-image-768x384.jpg',
            imgProxy: 'https://cors.bwa.workers.dev/',
            mapper: function (data) {
                return {
                    collection: true,
                    total_pages: data.total_pages || 5,
                    results: data,
                    source: 'filmix'
                };
            }
        }
    )
});

Lampa.Utils.putScriptAsync(['https://levende.github.io/lampa-plugins/collection_sources.js']);
