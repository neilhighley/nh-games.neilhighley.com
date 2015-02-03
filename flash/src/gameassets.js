(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.gameassets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(51));

	// piechart2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_49 = new cjs.Graphics().p("AOxcHQnDm3gBptQgBpuHBm2QHCm4J+gBMAAFAu2IgDAAQp8AAnCm1g");
	var mask_graphics_50 = new cjs.Graphics().p("ANEbCQmmnSAmpsQAmpsHcmaQHcmaJ8AnMgC3AuwQp8gnmnnSg");
	var mask_graphics_51 = new cjs.Graphics().p("ALaZ8QmJnrBNppQBNpmH1l9QH1l8J4BPMgFzAufQp4hPmInsg");
	var mask_graphics_52 = new cjs.Graphics().p("AJ0Y2QlooDBzpiQB0phILlcQIMlcJyB2MgIuAuCQpxh2lpoEg");
	var mask_graphics_53 = new cjs.Graphics().p("AIUXwQlHoZCapaQCZpYIhk7QIgk6JpCdMgLmAtZQppidlHoZg");
	var mask_graphics_54 = new cjs.Graphics().p("AG6WpQkkosC/pPQC/pOIzkYQIzkXJdDEMgObAskQpdjEklosg");
	var mask_graphics_55 = new cjs.Graphics().p("AFmViQkBo9DkpCQDkpAJDj0QJEj0JPDqMgRNArkQpPjpkBo+g");
	var mask_graphics_56 = new cjs.Graphics().p("AEZUdQjcpMEIozQEIoxJRjPQJRjPI/EOMgT6AqaQo/kOjcpMg");
	var mask_graphics_57 = new cjs.Graphics().p("ADSTXQi2pYErohQErofJciqQJdipItExMgWiApFQotkxi3pag");
	var mask_graphics_58 = new cjs.Graphics().p("ACTSTQiQpiFNoOQFMoLJmiDQJmiDIYFTMgZEAnlQoZlTiQpkg");
	var mask_graphics_59 = new cjs.Graphics().p("ABbRQQhnpqFrn1QFtn3JshdQJthcICF0MgbhAl7QoBl0hqpsg");
	var mask_graphics_60 = new cjs.Graphics().p("AArQPQhApwGKndQGMnfJxg2QJxg1HpGUMgd2AkHQnpmUhCpwg");
	var mask_graphics_61 = new cjs.Graphics().p("AADPQQgZpzGnnDQGpnGJzgOQJ0gOHOGxMggEAiLQnOmxgapzg");
	var mask_graphics_62 = new cjs.Graphics().p("AgcOSQANpyHDmoQHFmqJyAZQJzAZGyHNMgiJAgGQmwnNANp0g");
	var mask_graphics_63 = new cjs.Graphics().p("Ag0NXQA0pwHdmLQHfmMJvBAQJwBAGUHmMgkGAd6QmSnoA1pxg");
	var mask_graphics_64 = new cjs.Graphics().p("AhEMfQBapsH2lsQH3ltJqBmQJqBoF1H+Mgl6AblQlyoABcpsg");
	var mask_graphics_65 = new cjs.Graphics().p("AhMLpQCBplIMlLQINlNJiCNQJjCOFTIUMgnkAZJQlRoWCDplg");
	var mask_graphics_66 = new cjs.Graphics().p("AhMK2QCnpbIhkqQIgkrJYCzQJZC0EwIoMgpEAWmQkuopCppcg");
	var mask_graphics_67 = new cjs.Graphics().p("AhDKGQDMpOIzkHQIykJJMDYQJLDZENI6MgqXAT+QkOo7DQpQg");
	var mask_graphics_68 = new cjs.Graphics().p("AgzJaQDypAJCjjQJCjlI8D8QI9D8DpJLMgrjARRQjppLD0pBg");
	var mask_graphics_69 = new cjs.Graphics().p("AgaIxQEWovJPi/QJPjAIsEgQIrEfDDJYMgsiAOgQjEpYEYoxg");
	var mask_graphics_70 = new cjs.Graphics().p("AAFIMQE7obJZiaQJaibIZFCQIYFBCdJjMgtXALrQidpjE4oeg");
	var mask_graphics_71 = new cjs.Graphics().p("AAuHrQFcoGJih1QJjh0IDFhQIDFjB2JsMguAAIyQh3prFaoIg");
	var mask_graphics_72 = new cjs.Graphics().p("ABfHNQF8nuJohOQJphOHsGAQHrGDBPJxMgueAF5QhPpxF6nyg");
	var mask_graphics_73 = new cjs.Graphics().p("ACXG0QGanVJtgoQJsgnHTGfQHSGhAnJ0MguwAC9Qgnp1GYnYg");
	var mask_graphics_74 = new cjs.Graphics().p("ADXGfQG3m7JtAAQJuAAG3G7QG3G9AAJ2Mgu2AAAQAAp2G2m9g");
	var mask_graphics_75 = new cjs.Graphics().p("AjcVEQAnp0HRmgQHSmeJsAnQJsAnGbHVQGaHYgnJ0g");
	var mask_graphics_76 = new cjs.Graphics().p("AjUS3QBPpwHpmCQHsl/JoBOQJpBOF8HtQF8HxhPJwg");
	var mask_graphics_77 = new cjs.Graphics().p("AjHQrQB2ppIBliQIDlgJiB1QJjB0FcIFQFcIHh2Jpg");
	var mask_graphics_78 = new cjs.Graphics().p("AizOhQCcpgIWlBQIYk/JaCbQJaCbE7IZQE7IcidJgg");
	var mask_graphics_79 = new cjs.Graphics().p("AiaMZQDApVIskcQIqkeJPDAQJPC+EZIuQEYIujCJVg");
	var mask_graphics_80 = new cjs.Graphics().p("Ah7KUQDmpII8j4QI7j7JCDmQJCDjD1I+QD0I+jnJHg");
	var mask_graphics_81 = new cjs.Graphics().p("AhWISQEKo2JKjWQJKjVIyEJQIzEHDQJMQDQJMkLI3g");
	var mask_graphics_82 = new cjs.Graphics().p("AgrGUQEsokJXiwQJWiwIhErQIgEqCrJYQCrJYkuIlg");
	var mask_graphics_83 = new cjs.Graphics().p("AADEaQFQoPJgiLQJgiKINFOQIMFLCGJhQCFJilQIRg");
	var mask_graphics_84 = new cjs.Graphics().p("AA4CkQFwn4JohkQJohjH2FuQH3FrBfJpQBeJolwH6g");
	var mask_graphics_85 = new cjs.Graphics().p("AByA0QGPngJtg8QJsg8HfGMQHeGLA5JsQA3JtmPHig");
	var mask_graphics_86 = new cjs.Graphics().p("ACwg0QGtnIJvgVQJvgVHEGqQHFGoARJvQARJvmtHIg");
	var mask_graphics_87 = new cjs.Graphics().p("ADyiYQHJmsJvASQJuATGpHFQGpHEgVJuQgXJvnIGsg");
	var mask_graphics_88 = new cjs.Graphics().p("AE5j2QHimOJsA6QJsA5GMHfQGMHeg9JsQg9JsniGNg");
	var mask_graphics_89 = new cjs.Graphics().p("AGClNQH6luJoBgQJnBhFtH3QFsH1hjJnQhkJmn6Fvg");
	var mask_graphics_90 = new cjs.Graphics().p("AHQmdQIPlNJhCHQJfCHFMILQFNINiKJfQiKJfoQFOg");
	var mask_graphics_91 = new cjs.Graphics().p("AIhnlQIjksJWCuQJWCtEqIfQErIhivJVQiwJVojEsg");
	var mask_graphics_92 = new cjs.Graphics().p("AJ0olQI1kJJKDTQJJDSEIIxQEIIyjUJJQjVJJo1EJg");
	var mask_graphics_93 = new cjs.Graphics().p("ALLpdQJEjlI7D3QI7D3DkJAQDkJCj4I6Qj5I7pEDkg");
	var mask_graphics_94 = new cjs.Graphics().p("AMkqOQJRi/IrEaQIpEbDAJNQC/JPkcIqQkcIppRDAg");
	var mask_graphics_95 = new cjs.Graphics().p("AN/q1QJciaIXE9QIXE8CaJZQCZJak9IWQk/IXpbCag");
	var mask_graphics_96 = new cjs.Graphics().p("APcrUQJkh0ICFeQICFeBzJhQB0JilfICQlfIBpjB0g");
	var mask_graphics_97 = new cjs.Graphics().p("AQ6rqQJqhNHrF9QHqF+BNJmQBNJpl+HrQl+HqpqBNg");
	var mask_graphics_98 = new cjs.Graphics().p("ASZr4QJtgmHRGcQHSGZAmJtQAlJsmbHSQmcHRptAmg");
	var mask_graphics_99 = new cjs.Graphics().p("EAT8Ai6MAAFgu2QJuABG3G4QG2G2gBJuQgCJtm3G3Qm3G1psAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_graphics_49,x:203.5,y:223.7}).wait(1).to({graphics:mask_graphics_50,x:207.9,y:223.5}).wait(1).to({graphics:mask_graphics_51,x:212.6,y:223.1}).wait(1).to({graphics:mask_graphics_52,x:217.2,y:222.4}).wait(1).to({graphics:mask_graphics_53,x:221.8,y:221.4}).wait(1).to({graphics:mask_graphics_54,x:226.3,y:220.2}).wait(1).to({graphics:mask_graphics_55,x:230.7,y:218.6}).wait(1).to({graphics:mask_graphics_56,x:235,y:216.7}).wait(1).to({graphics:mask_graphics_57,x:239.2,y:214.6}).wait(1).to({graphics:mask_graphics_58,x:243.3,y:212.3}).wait(1).to({graphics:mask_graphics_59,x:247.1,y:209.6}).wait(1).to({graphics:mask_graphics_60,x:250.8,y:206.8}).wait(1).to({graphics:mask_graphics_61,x:254.3,y:203.7}).wait(1).to({graphics:mask_graphics_62,x:257.7,y:200.3}).wait(1).to({graphics:mask_graphics_63,x:260.7,y:196.8}).wait(1).to({graphics:mask_graphics_64,x:263.6,y:193.1}).wait(1).to({graphics:mask_graphics_65,x:266.2,y:189.2}).wait(1).to({graphics:mask_graphics_66,x:268.6,y:185.2}).wait(1).to({graphics:mask_graphics_67,x:270.7,y:181}).wait(1).to({graphics:mask_graphics_68,x:272.5,y:176.7}).wait(1).to({graphics:mask_graphics_69,x:274.1,y:172.2}).wait(1).to({graphics:mask_graphics_70,x:275.4,y:167.7}).wait(1).to({graphics:mask_graphics_71,x:276.4,y:163.1}).wait(1).to({graphics:mask_graphics_72,x:277.1,y:158.4}).wait(1).to({graphics:mask_graphics_73,x:277.5,y:153.7}).wait(1).to({graphics:mask_graphics_74,x:277.6,y:149}).wait(1).to({graphics:mask_graphics_75,x:277.6,y:153.7}).wait(1).to({graphics:mask_graphics_76,x:277.6,y:158.4}).wait(1).to({graphics:mask_graphics_77,x:277.6,y:163.1}).wait(1).to({graphics:mask_graphics_78,x:277.7,y:167.7}).wait(1).to({graphics:mask_graphics_79,x:277.7,y:172.2}).wait(1).to({graphics:mask_graphics_80,x:277.7,y:176.6}).wait(1).to({graphics:mask_graphics_81,x:277.7,y:180.9}).wait(1).to({graphics:mask_graphics_82,x:277.7,y:185.1}).wait(1).to({graphics:mask_graphics_83,x:277.6,y:189.1}).wait(1).to({graphics:mask_graphics_84,x:277.5,y:193}).wait(1).to({graphics:mask_graphics_85,x:277.5,y:196.7}).wait(1).to({graphics:mask_graphics_86,x:277.4,y:200.2}).wait(1).to({graphics:mask_graphics_87,x:277.4,y:203.5}).wait(1).to({graphics:mask_graphics_88,x:277.4,y:206.6}).wait(1).to({graphics:mask_graphics_89,x:277.5,y:209.5}).wait(1).to({graphics:mask_graphics_90,x:277.5,y:212.1}).wait(1).to({graphics:mask_graphics_91,x:277.5,y:214.4}).wait(1).to({graphics:mask_graphics_92,x:277.5,y:216.5}).wait(1).to({graphics:mask_graphics_93,x:277.5,y:218.4}).wait(1).to({graphics:mask_graphics_94,x:277.4,y:219.9}).wait(1).to({graphics:mask_graphics_95,x:277.3,y:221.2}).wait(1).to({graphics:mask_graphics_96,x:277.2,y:222.2}).wait(1).to({graphics:mask_graphics_97,x:277.1,y:222.9}).wait(1).to({graphics:mask_graphics_98,x:277,y:223.3}).wait(1).to({graphics:mask_graphics_99,x:277.9,y:223.4}).wait(1));

	// piechart
	this.instance = new lib.piechart();
	this.instance.setTransform(483.2,296.7,1.014,1,180,0,0,75,150);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(51));

	// piechartMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ATjr8QJ9gBHEG3QHDG0ABJuQABJtnBG4QnCG4p+ABg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EASIAi3MAC7guwQJ8AnGmHTQGmHQgmJtQgnJsndGbQmzF1o3AAQg3AAg4gDg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EAQoAitMAF7gueQJ4BQGHHtQGHHqhOJpQhPJon2F7QmeE5n2AAQhrAAhvgOg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EAPJAicMAI5gt/QJxB4FnIFQFmIDh2JiQh1JioNFaQmGEAm8AAQibAAiigfg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EANsAiGMAL0gtVQJoCgFFIbQFEIYidJZQidJaohE4QlpDNmGAAQjKAAjRg2g");
	var mask_1_graphics_5 = new cjs.Graphics().p("EAMQAhpMAOtgseQJcDHEhItQEhItjDJOQjDJPo0EUQlICglVAAQj2AAj+hUg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EAK3AhHMARigrcQJNDtD9I+QD8I/jpJAQjoJBpFDwQkjB3kmAAQkjAAkmh2g");
	var mask_1_graphics_7 = new cjs.Graphics().p("EAJgAgfMAUSgqOQI9ESDXJNQDWJOkNIwQkNIxpSDKQj8BVj4AAQlSAAlKifg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AIMfyMAW9go2QIqE3CwJZQCwJbkwIdQkxIepeCkQjQA4jLAAQmCAAlrjMg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AG7fAMAZignSQIUFZCJJjQCJJklSIKQlTIJpnB8QiiAhidAAQm1AAmIj+g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AFueIMAcAglkQH9F7BhJqQBhJslzHyQlzHzpuBVQhxAPhuAAQnsAAmgk2g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AEldMMAeWgjtQHjGbA5JvQA5JxmSHZQmSHapyAtQg9AEg8AAQooAAm0lyg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ADfcKMAglghrQHIG3AQJzQARJzmwG/QmwG/pzAEIgMAAQpsABnDm1g");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAS6Ai8QpygjmrnVMAirgfhQGrHTgYJzQgYJynMGiQmoGCo1AAQgwAAgwgDg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EARZAi0QpuhMmLnuMAkogdPQGLHthAJwQhAJvnmGEQmXFFn3AAQhhAAhlgMg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAP5AilQpohzlqoHMAmbga0QFqIFhoJqQhoJqn9FkQmCENm+AAQiQAAiWgcg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAOaAiQQpfialGodMAoCgYSQFIIaiPJiQiQJioTFDQloDamLAAQi8AAjEgyg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAM9Ah2QpUjBkjowMAphgVtQElIwi3JXQi2JXonEgQlLCtlaAAQjoAAjuhNg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EALhAhVQpGjmj+pCMAq0gS/QEAJBjcJLQjdJJo4D8QkpCEktAAQkTAAkWhug");
	var mask_1_graphics_19 = new cjs.Graphics().p("EAKIAgvQo2kLjZpQMAr9gQNQDbJQkCI7QkCI6pHDXQkFBgkBAAQk+AAk6iUg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EAIyAgEQokkuiypdMAs6gNXQCzJdkmIpQkmIopTCxQjcBCjWAAQltAAlZi/g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AHffUQoOlRiMpnMAtqgKcQCNJnlJIUQlJIUpeCLQixAoiqAAQmdAAl1jug");
	var mask_1_graphics_22 = new cjs.Graphics().p("AGPeeQn3lxhlpvMAuQgHfQBkJulqH+QlqH+pmBjQiCAVh9AAQnRAAmOkjg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AFCdkQndmRg9pzMAuogEhQA9JzmLHmQmKHlprA8QhQAIhOAAQoLAAmildg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AD6clQnDmvgUp2MAu0gBgQAUJ1mpHLQmoHLptAUIg3ABQpLAAmxmbg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EATMAi/QptgUmpnLQmnnLAUp1MAu1ABhQgVJ1nFGuQmxGcpLAAIg2gBg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EARuAi4Qprg8mLnkQmInlA9pyMAuoAEgQg9JyngGQQmhFdoLAAQhOAAhQgIg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EAQUAirQpmhklrn8Qlon9BkptMAuQAHfQhlJtn5FxQmNEinRAAQh9AAiCgVg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EAO+AiXQpeiKlKoTQlHoTCMpkMAtrAKcQiMJloQFPQl0DtmdAAQiqAAixgpg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EANsAh+QpUixklomQkmonCzpaMAs6ANWQizJaokEtQlYC9lsAAQjWAAjdhCg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EAMfAhfQpHjXkBo4QkCo4DZpNMAr9AQNQjZJNo2EJQk4CRk9AAQkCAAkGhgg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EALYAg7Qo4j8jcpHQjepID+o9MAq1AS/Qj+I+pGDjQkUBskQAAQkuAAkriEg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EAKWAgRQonkgi2pUQi4pUEgosMApjAVtQkiIspTC9QjsBLjlAAQlcAAlMitg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AJZfiQoTlDiQpeQiRpfFDoWMAoFAYTQlGIYpdCWQjBAwi5AAQmMAAlrjbg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AIjetQn9lkhppmQhrpnFln/MAmbAa0QlmIBpmBwQiSAaiNAAQnAAAmEkPg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AHzd0QnmmEhBpsQhDpsGFnnMAkoAdOQmHHqpsBHQhgALhdAAQn5AAmalHg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AHJc2QnKmigcpvQgapvGjnNMAirAfhQmlHPpvAfQgsADgrAAQo4AAmrmFg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EAXEAi6QpvgJmwm+Qmtm/AKpvQANpvHBmxMAglAhrQm5GqpgAAIgYAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EAWIAi1QptgxmSnZQmRnaAyptQA1pqHcmVMAeXAjsQmqFpocAAQhBAAhDgFg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EAVOAiqQpohZlznyQlznzBbpoQBcpmH1l1MAcAAlkQmVEungAAQhyAAh3gRg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EAUXAiYQphiAlSoJQlToJCDphQCDpfIMlUMAZiAnSQl9D3mpAAQihAAingjg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EATjAiBQpXinkwoeQkxoeCqpXQCppVIhkyMAW9Ao2QlgDGl3AAQjOAAjUg7g");
	var mask_1_graphics_42 = new cjs.Graphics().p("EASzAhjQpMjNkMowQkNowDPpLQDPpJIzkOMAUSAqPQlACZlHAAQj5AAj+hZg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EASFAhAQo8jyjppAQjopBD0o8QD1o6JCjpMARiArcQkcBykaAAQklAAklh8g");
	var mask_1_graphics_44 = new cjs.Graphics().p("EARcAgYQoskXjDpOQjDpOEYorQEZopJPjEMAOuAsfQj0BQjuAAQlTAAlHikg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AQ2frQoZk6icpaQidpZE7oWQE7oYJbidMAL0AtVQjIA0jCAAQmDAAlmjRg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AQUe4QoDlch2piQh2piFcoBQFdoDJkh2MAI4AuAQiaAeiVAAQm2AAmBkEg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AP2eAQnsl8hOpoQhPppF9npQF9nrJphPMAF7AueQhqANhmAAQnuAAmXk7g");
	var mask_1_graphics_48 = new cjs.Graphics().p("APcdDQnSmagnptQgmpsGbnQQGbnRJtgnMAC7AuwQg2ADg0AAQorAAmql4g");
	var mask_1_graphics_49 = new cjs.Graphics().p("AO6cCQm2m4ABpuQABptG4m1QG4m2JuABMgAGAu2QptgBm3m4g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:279.3,y:223.5}).wait(1).to({graphics:mask_1_graphics_1,x:279.2,y:223.5}).wait(1).to({graphics:mask_1_graphics_2,x:279.2,y:223.5}).wait(1).to({graphics:mask_1_graphics_3,x:279.2,y:223.6}).wait(1).to({graphics:mask_1_graphics_4,x:279.2,y:223.7}).wait(1).to({graphics:mask_1_graphics_5,x:279.1,y:223.7}).wait(1).to({graphics:mask_1_graphics_6,x:279,y:223.8}).wait(1).to({graphics:mask_1_graphics_7,x:278.9,y:223.8}).wait(1).to({graphics:mask_1_graphics_8,x:278.8,y:223.9}).wait(1).to({graphics:mask_1_graphics_9,x:278.6,y:223.9}).wait(1).to({graphics:mask_1_graphics_10,x:278.5,y:223.9}).wait(1).to({graphics:mask_1_graphics_11,x:278.3,y:223.9}).wait(1).to({graphics:mask_1_graphics_12,x:278.2,y:223.9}).wait(1).to({graphics:mask_1_graphics_13,x:278.1,y:224}).wait(1).to({graphics:mask_1_graphics_14,x:278,y:224.1}).wait(1).to({graphics:mask_1_graphics_15,x:278,y:224.2}).wait(1).to({graphics:mask_1_graphics_16,x:278,y:224.2}).wait(1).to({graphics:mask_1_graphics_17,x:278,y:224.3}).wait(1).to({graphics:mask_1_graphics_18,x:277.9,y:224.3}).wait(1).to({graphics:mask_1_graphics_19,x:277.9,y:224.3}).wait(1).to({graphics:mask_1_graphics_20,x:277.8,y:224.3}).wait(1).to({graphics:mask_1_graphics_21,x:277.8,y:224.3}).wait(1).to({graphics:mask_1_graphics_22,x:277.7,y:224.2}).wait(1).to({graphics:mask_1_graphics_23,x:277.7,y:224.1}).wait(1).to({graphics:mask_1_graphics_24,x:277.6,y:224}).wait(1).to({graphics:mask_1_graphics_25,x:277.6,y:224}).wait(1).to({graphics:mask_1_graphics_26,x:277.3,y:224}).wait(1).to({graphics:mask_1_graphics_27,x:276.7,y:224}).wait(1).to({graphics:mask_1_graphics_28,x:275.8,y:224}).wait(1).to({graphics:mask_1_graphics_29,x:274.6,y:224}).wait(1).to({graphics:mask_1_graphics_30,x:273.1,y:224}).wait(1).to({graphics:mask_1_graphics_31,x:271.3,y:224}).wait(1).to({graphics:mask_1_graphics_32,x:269.3,y:223.9}).wait(1).to({graphics:mask_1_graphics_33,x:266.9,y:223.8}).wait(1).to({graphics:mask_1_graphics_34,x:264.3,y:223.7}).wait(1).to({graphics:mask_1_graphics_35,x:261.4,y:223.6}).wait(1).to({graphics:mask_1_graphics_36,x:258.3,y:223.5}).wait(1).to({graphics:mask_1_graphics_37,x:255,y:223.5}).wait(1).to({graphics:mask_1_graphics_38,x:251.4,y:223.5}).wait(1).to({graphics:mask_1_graphics_39,x:247.7,y:223.5}).wait(1).to({graphics:mask_1_graphics_40,x:243.7,y:223.6}).wait(1).to({graphics:mask_1_graphics_41,x:239.6,y:223.6}).wait(1).to({graphics:mask_1_graphics_42,x:235.3,y:223.7}).wait(1).to({graphics:mask_1_graphics_43,x:230.9,y:223.7}).wait(1).to({graphics:mask_1_graphics_44,x:226.4,y:223.7}).wait(1).to({graphics:mask_1_graphics_45,x:221.8,y:223.7}).wait(1).to({graphics:mask_1_graphics_46,x:217.1,y:223.6}).wait(1).to({graphics:mask_1_graphics_47,x:212.3,y:223.6}).wait(1).to({graphics:mask_1_graphics_48,x:207.5,y:223.6}).wait(1).to({graphics:mask_1_graphics_49,x:202,y:223.6}).wait(51));

	// piechart
	this.instance_1 = new lib.piechart();
	this.instance_1.setTransform(332.2,297,1,1,0,0,0,75,150);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AwkQkQm2m3AAptQAApsG2m3QG4m4JsABQJtgBG3G4QG3G3ABJsQgBJtm3G3Qm3G3ptAAQpsAAm4m3g");
	this.shape.setTransform(404,297);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(654,447,300,300);


// symbols:
(lib.piechart = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Ak1QkQm4m3AAptQAApsG4m3QG1m4JuAAMAAAAu2QpuABm1m4g");
	this.shape.setTransform(75,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;