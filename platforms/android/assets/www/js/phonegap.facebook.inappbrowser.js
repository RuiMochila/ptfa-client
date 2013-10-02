// https://github.com/caiovaccaro/phonegap.facebook.inappbrowser
;(function() {

    FacebookInAppBrowser = {

        settings: {
          appId: '',
          redirectUrl: '',
          permissions: ''
        }

        , login: function(successCallback, finalCallback) {
            console.log("Im about to login");
            if(this.settings.appId === '' || this.settings.redirectUrl === '') {
              console.log('[FacebookInAppBrowser] You need to set up your app id and redirect url.');
              return false;
            }

            var authorize_url  = "https://m.facebook.com/dialog/oauth?";
                authorize_url += "client_id=" + this.settings.appId;
                authorize_url += "&redirect_uri=" + this.settings.redirectUrl;
                authorize_url += "&display=touch";
                authorize_url += "&response_type=token";
                authorize_url += "&type=user_agent";
                
                if(this.settings.permissions !== '') {
                  authorize_url += "&scope=" + this.settings.permissions;
                }

            var faceView,
                callback = function(location) {
                  console.log("[FacebookInAppBrowser] Event 'loadstart': " + JSON.stringify(location));

                  if (location.url.indexOf("access_token") !== -1) {
                    // Success
                    var access_token = location.url.match(/access_token=(.*)$/)[1].split('&expires_in')[0];
                    console.log("[FacebookInAppBrowser] Logged in. Token: " + access_token);
                    window.localStorage.setItem('accessToken', access_token);
                    faceView.close();

                    if(typeof successCallback !== 'undefined' && typeof successCallback === 'function') {
                      successCallback();
                    }

                  }

                  if (location.url.indexOf("error_reason=user_denied") !== -1) {
                    // User denied
                    userDenied = true;
                    console.log('[FacebookInAppBrowser] User denied Facebook Login.');
                    faceView.close();
                  }
                },
                userDenied = false;

            faceView = window.open(authorize_url, '_blank', 'location=no');
            faceView.addEventListener('loadstart', callback);
            faceView.addEventListener('exit', function() {

              if(window.localStorage.getItem('accessToken') === null && userDenied === false) {
                // InAppBrowser was closed and we don't have an app id
                if(typeof finalCallback !== 'undefined' && typeof finalCallback === 'function') {
                  finalCallback();
                }

              }

              userDenied = false;

            });

        }
        , logout: function(afterCallback) {

            var logout_url = encodeURI("https://www.facebook.com/logout.php?next="  + this.settings.redirectUrl + "&access_token=" + window.localStorage.getItem('accessToken'));

            var face = window.open(logout_url, '_blank', 'hidden=yes,location=no'),
                callback = function(location) {
                   console.log("[FacebookInAppBrowser] Event 'loadstart': " + JSON.stringify(location));

                   if(location.url == logout_url) {
                      alert("do nothing");
                      // Do nothing

                   } else if(location.url ===  this.settings.redirectUrl + '#_=_' || location.url === this.settings.redirectUrl) {
                      alert("face close");
                      face.close();

                      if(typeof afterCallback !== 'undefined' && typeof afterCallback === 'function') {
                        alert("after callback");
                        afterCallback();

                      }

                   }

                };

            face.addEventListener('loadstart', callback);

        }

    };

}).call(this);