// Created by iWeb 3.0.4 local-build-20120820

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,200),url:'Research_I_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Research_I_files/stroke_1.png'},{rect:new IWRect(5,-5,290,10),url:'Research_I_files/stroke_2.png'},{rect:new IWRect(295,-5,10,10),url:'Research_I_files/stroke_3.png'},{rect:new IWRect(295,5,10,200),url:'Research_I_files/stroke_4.png'},{rect:new IWRect(295,205,10,11),url:'Research_I_files/stroke_5.png'},{rect:new IWRect(5,205,290,11),url:'Research_I_files/stroke_6.png'},{rect:new IWRect(-5,205,10,11),url:'Research_I_files/stroke_7.png'}],new IWSize(300,210))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Research_I_files/Research_IMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
