package in.finbox.riskioniccapacitorsample;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import in.finbox.ionicrisksdk.IonicRiskSdkPlugin;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Register the Risk Plugin
    registerPlugin(IonicRiskSdkPlugin.class);
  }
}
