// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;

const kc_s1 = "lilf_s1";
var lilf_s1 = "";
if (Keychain.contains(kc_s1)) {
    lilf_s1 = Keychain.get(kc_s1);
} else {
    alert = new Alert();
    alert.addSecureTextField("Enter secret", "");
    await alert.presentAlert();
    lilf_s1 = alert.textFieldValue(0);
    Keychain.set(kc_s1, lilf_s1);
}

w1 = new ListWidget();
// w1.backgroundGradient
req = new Request("https://lilf.ir/api/hi/");
req.headers = {
    'Authorization': lilf_s1
  };
request.method = 'POST';
request.body = JSON.stringify({
    "cmd": "ec wow",
    "stdin": "",
    "verbose": "0"
});
res = await req.loadString();
w1.addText("hi 7 " + res);
Script.setWidget(w1);