// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: calendar-alt;

const kc_s1 = "lilf_s1";
var lilf_s1 = "";
if (Keychain.contains(kc_s1)) {
    lilf_s1 = Keychain.get(kc_s1);
} else {
    // Alerts aren't supported in widgets, so you need to run this script manually to set this up
    alert = new Alert();
    alert.addSecureTextField("Enter secret", "");
    await alert.presentAlert();
    lilf_s1 = alert.textFieldValue(0);
    Keychain.set(kc_s1, lilf_s1);
}

w1 = new ListWidget();
lg = new LinearGradient();
lg.colors = [new Color("#a0ff99"), new Color("#00d4ff")];
lg.locations = [0, 1];
w1.backgroundGradient = lg;
req = new Request("https://garden.lilf.ir/api/v1/zsh/");
req.headers = {
    'Authorization': lilf_s1
  };
req.method = 'POST';
req.body = JSON.stringify({
    "cmd": "datej ; rem-today ; remc-today",
    "stdin": "",
    "verbose": "0"
});
res = await req.loadString();
text = w1.addText(res);
text.textColor = new Color("#fff0c4");
// text.textColor = new Color("#390080");
// text.textColor = new Color("#fbffc9");
Script.setWidget(w1);

if (config.runsInWidget == false) {
    w1.presentMedium();
    // w1.presentLarge();
}