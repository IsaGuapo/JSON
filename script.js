

//creacion del json dentro de una variable
let objetoJSON={
        "localidade 1": {
        "Continente": "África",
        "País": "Angola",
        "Capital": "Luanda"
        },
        "localidade 2": {
        "Continente": "América do Norte",
        "País": "Estados Unidos",
        "Capital": "Washington DC"
        },
        "localidade 3": {
        "Continente": "América Central",
        "País": "México",
        "Capital": "Cidade do México"
        },
        "localidade 4": {
        "Continente": "América do Sul",
        "País": "Brasil",
        "Capital": "Brasília"
        },
        "localidade 5": {
        "Continente": "Europa",
        "País": "Espanha",
        "Capital": "Madri"
        },
        "localidade 6": {
        "Continente": "Europa",
        "País": "Alemanha",
        "Capital": "Berlim"
        },
        "localidade 7": {
        "Continente": "Oceania",
        "País": "Austrália",
        "Capital": "Camberra"
        },
        "localidade 8": {
        "Continente": "Ásia",
        "País": "Japão",
        "Capital": "Tóquio"
        }
}

//Código para obtener el país de la localidade 8
console.log(objetoJSON["localidade 8"].Capital)

//Código que permite añadir una localidad a tu elección
objetoJSON["localidade 10"]={
        "Continente": "America",
        "País": "Colombia",
        "Capital": "Bogota"
        }


//Modifica la localidade 4, añadiendo el número de habitantes
objetoJSON["localidade 4"]["numHabitantes"]=2000;

//Cambia la estructura del JSON de forma que sea más directo acceder a las capitales de las localidades, dado que va a ser el dato que más vamos a consultar
//reamos una variable nueva para ilustrar como quedaria
let objetoJSONMejorado={
        "Luanda": {
        "Continente": "África",
        "País": "Angola",
        },
        "Washington DC": {
        "Continente": "América do Norte",
        "País": "Estados Unidos",
        },
        "Cidade do México": {
        "Continente": "América Central",
        "País": "México",
        },
        "Brasília": {
        "Continente": "América do Sul",
        "País": "Brasil",
        },
        "Madrid": {
        "Continente": "Europa",
        "País": "Espanha",
        },
        "Berlim": {
        "Continente": "Europa",
        "País": "Alemanha",
        },
        "Camberra": {
        "Continente": "Oceania",
        "País": "Austrália",
        },
        "Tóquio": {
        "Continente": "Ásia",
        "País": "Japão",
        }
}

//Partiendo de la información de la API de Twitter y de su organización de los objetos...
let objetoTwit={
                "created_at": "Fri Sep 18 18:36:15 +0000 2020",
                "id": 1307025659294674945,
                "id_str": "1307025659294674945",
                "full_text": "Here’s an article that highlights the updates in the new Tweet payload v2 https:\/\/t.co\/oeF3ZHeKQQ",
                "truncated": false,
                "display_text_range": [
                  0,
                  97
                ],
                "entities": {
                  "hashtags": [],
                  "symbols": [],
                  "user_mentions": [],
                  "urls": [
                    {
                      "url": "https:\/\/t.co\/oeF3ZHeKQQ",
                      "expanded_url": "https:\/\/dev.to\/twitterdev\/understanding-the-new-tweet-payload-in-the-twitter-api-v2-1fg5",
                      "display_url": "dev.to\/twitterdev\/und…",
                      "indices": [
                        74,
                        97
                      ]
                    }
                  ]
                },
                "source": "<a href=\"https:\/\/mobile.twitter.com\" rel=\"nofollow\">Twitter Web App<\/a>",
                "in_reply_to_status_id": 1304102743196356610,
                "in_reply_to_status_id_str": "1304102743196356610",
                "in_reply_to_user_id": 2244994945,
                "in_reply_to_user_id_str": "2244994945",
                "in_reply_to_screen_name": "TwitterDev",
                "user": {
                  "id": 2244994945,
                  "id_str": "2244994945",
                  "name": "Twitter Dev",
                  "screen_name": "TwitterDev",
                  "location": "127.0.0.1",
                  "description": "The voice of the #TwitterDev team and your official source for updates, news, and events, related to the #TwitterAPI.",
                  "url": "https:\/\/t.co\/3ZX3TNiZCY",
                  "entities": {
                    "url": {
                      "urls": [
                        {
                          "url": "https:\/\/t.co\/3ZX3TNiZCY",
                          "expanded_url": "https:\/\/developer.twitter.com\/en\/community",
                          "display_url": "developer.twitter.com\/en\/community",
                          "indices": [
                            0,
                            23
                          ]
                        }
                      ]
                    },
                    "description": {
                      "urls": []
                    }
                  },
                  "protected": false,
                  "followers_count": 513958,
                  "friends_count": 2039,
                  "listed_count": 1672,
                  "created_at": "Sat Dec 14 04:35:55 +0000 2013",
                  "favourites_count": 2145,
                  "utc_offset": null,
                  "time_zone": null,
                  "geo_enabled": true,
                  "verified": true,
                  "statuses_count": 3635,
                  "lang": null,
                  "contributors_enabled": false,
                  "is_translator": false,
                  "is_translation_enabled": false,
                  "profile_background_color": "FFFFFF",
                  "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                  "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                  "profile_background_tile": false,
                  "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/1283786620521652229\/lEODkLTh_normal.jpg",
                  "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/1283786620521652229\/lEODkLTh_normal.jpg",
                  "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/2244994945\/1594913664",
                  "profile_link_color": "0084B4",
                  "profile_sidebar_border_color": "FFFFFF",
                  "profile_sidebar_fill_color": "DDEEF6",
                  "profile_text_color": "333333",
                  "profile_use_background_image": false,
                  "has_extended_profile": true,
                  "default_profile": false,
                  "default_profile_image": false,
                  "following": null,
                  "follow_request_sent": null,
                  "notifications": null,
                  "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 11,
                "favorite_count": 70,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
              }
              //acceder al id de usuario
              console.log(objetoTwit["user"].id)
              //aaceder al texto del twit
              console.log(objetoTwit.full_text)