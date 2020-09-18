// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;
w1 = new ListWidget();
// w1.backgroundGradient
req = new Request("https://lilf.ir");
res = await req.loadString();
w1.addText("hi 7 " + res)
Script.setWidget(w1);