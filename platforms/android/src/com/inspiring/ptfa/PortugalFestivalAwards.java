package com.inspiring.ptfa;

import android.os.Bundle;
import org.apache.cordova.*;

public class PortugalFestivalAwards extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 4000);
        //super.loadUrl("file:///android_asset/www/index.html")
    }
}

