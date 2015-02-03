(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#000000",
	manifest: [	]
};

// stage content:

(lib.failo_text = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJjEAQhOhqAAiVQAAiTBOhpQBPhqBwAAQBvAABPBqQBPBpAACTQAACVhPBqQhPBphvAAQhwAAhPhpgAKui0QgyBNAABrQAABsAyBNQAzBNBHAAQBHAAAyhNQAzhNAAhsQAAhrgzhNQgyhNhHAAQhHAAgzBNgAkKDKIjmAAIgwCJIgKgEIhXAAIAAgfIgCAAIACgEIAAgFIACAAIDdp8IAEABIAAgGIBWAAIAAACIADgBIDKKNIgDABIAAAYIhQAAIgSAGgAnCBGICQAAIhEjZgAwtFTIAAo1IgBAAIAAiHIHuAAIAACHImCAAIAAC5IDHAAIAABUIjHAAIAAEogABIFRIAAqvIBxAAIAAJIIFYAAIAABhIgGAAIAAAGgAhdFLIAAqvIBlAAIAAKvg");
	this.shape.setTransform(107.1,36.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.3,72.4);


(lib.failo_main = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CC00").s().p("AgOUnIgCgEIgIhPQgWkYAXkSQA0qNElodIgziFQihCnh5C/QmuKbApOnIAAADIgCACIgCAAIpmAAIgEgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBMAQOgpEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABIABABIADAAIACADID6KRQAiglAmgiQBNhJDDiaQimDSh9DlIKzcaIAAABIAEAKIAAAEIgCACIgEABIwGAAIgDgBg");
	this.shape.setTransform(102.5,132.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,205,264.1);


(lib.failo_ball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CC00").s().p("AkIEtIhamuIF+jbIFHEpIi2GQg");
	this.shape.setTransform(35.5,35);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,70);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.logo_text = new lib.failo_text("synched",0);
	this.logo_text.setTransform(107.1,376.8,1,1,0,0,0,107.1,36.2);

	this.logo_ball = new lib.failo_ball("synched",0);
	this.logo_ball.setTransform(208.5,35,1,1,0,0,0,35.5,35);

	this.logo_main = new lib.failo_main("synched",0);
	this.logo_main.setTransform(107.4,171.3,1,1,0,0,0,102.5,132.1);

	this.addChild(this.logo_main,this.logo_ball,this.logo_text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,244,413);




//-- Flash screen

// stage content:
    (lib.titleScreen = function() {
        this.initialize();

        // Layer 11
        this.failo = new lib.failo_text_small("synched",0);
        this.failo.setTransform(400.8,446,0.57,0.57,0,0,0,107.1,33.2);

        // title
        this.titletext = new lib.neilhighley_title("synched",0);
        this.titletext.setTransform(377.2,234.4,1,1,0,0,0,206.1,119.4);

        // leaves
        this.instance_2 = new lib.tree("synched",0);
        this.instance_2.setTransform(219.7,263.9,1,1,0,0,0,58.9,83.2);

        // house
        this.instance_3 = new lib.house("synched",0);
        this.instance_3.setTransform(106.9,224.5,1,1,0,0,0,-293,-74.8);

        // Layer 19
        this.footer = new lib.footer();
        this.footer.setTransform(390.3,543.9,1,1,0,0,0,345.6,48.5);

        // sky
        this.sky = new lib.sky();
        this.sky.setTransform(384.4,221.6,1,1,0,0,0,343.9,121.1);

        // ocean
        this.instance_4 = new lib.ocean();
        this.instance_4.setTransform(504.4,363.6,1,1,0,0,0,225.2,21.1);

        // Layer 14
        this.instance_5 = new lib.rocks("synched",0);
        this.instance_5.setTransform(155.7,364.3,1,1,0,0,0,124.1,20.2);

        this.addChild(this.instance_5,this.instance_4,this.sky,this.footer,this.instance_3,this.instance_2,this.titletext,this.failo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(431.6,400.5,704.3,492);


// symbols:
    (lib.tree = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#00FF33").ss(1,1,1).p("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");
        this.shape.setTransform(58.9,83.2);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#817B70").ss(3,1,1).p("AAAgLIAAhwAAABCIAAhCAAAB8IAAgJ");
        this.shape_1.setTransform(35.8,149.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#00CC33").s().p("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");
        this.shape_2.setTransform(58.9,83.2);

        this.addChild(this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1,-1,119.7,168.4);


    (lib.sky = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2096F7").s().p("Eg1tAS6MAAAglzMBrbAAAMAAAAlzg");
        this.shape.setTransform(343.9,121.1);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,687.8,242.2);


    (lib.rocks_bg = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#333333").ss(3,1,1).p("ASpjFIAHAvIgwAYIBFApIgZBuIg6AGIBMAnIgSB4Ig3AIARJhiIgOAHIhJhKIgTgUIAGgMARPASIADgDIAgAQASAh+Ig3AcIAGB0IACAzIhUAfIgCACIARBgANtDGIgXgWIAeg9IAVgqIBwARIACAMAQvDGIgyhiAN+jFIB0AgAKPjFIgQBJIgBABIAXANIAOhXALpArIAEgGIgDgCgALtAlIAkgrIgMgPIB1iwALqAjIhkgxIAPhgAIrjFIAMA2IAOgNIA5AhAI7CrIgHgOIBRhRIA0AaIAyAaIgKBGAHmDGIACgPIAogHIANAWAIQCwIgSABIgJgUIhGApAI7CrIgrAFAJJDGIgOgbAK5BmIAwg7AI3iPIAyDpIh0BDAN0BzIhjh5ACrjFIAKB5IhSAiIgmAQIADAOIAwgRIgNgNAA9gaIg9AZIhchtIgignIAegwACWAGIgTgQIARAUADiB6IhbhSIANgeIACgEIBbjLABwgdIAEgBIAPAUABPBLIAtgBIAsB8ADCDGIgKgQIgLAQABAgMIASBVIgDACAE3DGIhVhMIgqA8AiQhCIgcgXIAOgiIAehKAhZCKIhphgIAyhsIAVgwIAfAEAjbiRIAKA8IglAUIAGApIgSAJIB2CnIARAYIgQAWAjkjFIAJA0IA9AWAlFggIhUhTIAgg/IAJgTAl0gDIAhgKIAOgTAk2ghIgKAGIgFgFAktgZIAdgJIAOATAlTgNIAmgMIgJgIAj2hBIhAAgAn0AiIgsgiIAkhkIBrADIAdBeAg6CaIgIAFIgXgVIgzAOAg5CiIgBgIAg2CYIgEACAg5CiIADgKIAVhKIBwgDAhEDGIALgkAoIBcIABg0IATgGICAglAo8iwIAYgVAo8jFIAAAVAr6gxIBoAAIgPgiIBlhdAqSgxIAngBIAvCMIgQAMIgCABIASBXIgPAIAsfAvIAfhgIAGAAAuRhnICSAYIAFAeAsfAvIApgCIATA3IAkBiArjBkIAUgtIB6AOIAHAiAoZCCIgHgNIAYgZAoJChIgQgfIglAEIgOggAoJChIABhFAoKDGIABglAv0AbIBGiHIAdAFAuaiDIAJAcAv0AbIALAGIgFAaIAWACIAIAiIACALIAJAmIAKghAuujFIAUBCIAxhCAxoAAIgXgOIgwglIAwiOIACgEAyZAsIAagYIAXgUIAcgXIBYAyAzEBPIAQgmIAbADICrAPAvDBtIAIACIARg8ICLgEAvDBtIgNgOAvOBqIALADAvVDGIAQg2AmbjFIAiAT");
        this.shape.setTransform(122.1,19.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#666666").s().p("AQvDGIgyhhIBUggIgCgzIACAzIhUAgIgCABIARBgIifAAIgXgXIAeg8IAVgpIBwARIACALIgCgLIhwgRIgVApIhjh4IBjB4IgeA8IAXAXIiMAAIAKhGIgygaIAwg7IAEgGIgDgBIhkgxIAPhhIgPBhIBkAxIgBAHIgwA7IAyAaIgKBGIiYAAIgOgbIgHgOIBRhRIA0AaIg0gaIhRBRIAHAOIgrAEIgSACIgJgUIB0hCIgyjqIAyDqIh0BCIhGApIh4AAIhVhMIhbhSIANgdIACgFIgTgQIARAVIgNAdIBbBSIgqA9IgLAPIgFAAIgsh8IgtABIADgCIgShVIAwgRIgNgMIBSgjIgKh5IAKB5IhSAjIgmAPIADAOIASBVIgDACIhwADIgVBKIgEACIgIAEIgXgUIhphgIAyhsIAVgvIAfADIgignIAegwIgeAwIAiAnIgfgDIgVAvIgyBsIBpBgIgzAPIh2inIASgKIgGgpIAGApIgSAKIgOgTIgdAJIgJgIIBAghIhAAhIgKAFIgFgEIAFAEIAKgFIAJAIIgmALIAOgSIgOASIghAKIgdheIhrgDIgkBlIAsAhIgTAGIgBA0IABg0IATgGICAglIAhgKIAmgLIAdgJIAOATIB2CnIARAXIgQAWIl/AAIABglIABhFIgYAZIAHANIgHgNIAYgZIgBBFIgQgfIglAEIgOggIAQgLIgviMIgnAAIAnAAIAvCMIgQALIgCABIASBXIgPAIIh0AAIgkhiIAUgsIB6ANIAHAiIgHgiIh6gNIgUAsIgTg2IgpABIiLAEIgRA8IgIgCIAIACIARg8ICLgEIApgBIATA2IAkBiIkWAAIAQg2IAKghIgKAhIgQA2IjvAAIAAh3IAQgmIAbADIAagXIAXgUIAcgYIBYAyIhYgyIgcAYIgXgPIgwgkIAwiPIACgEIDPAAIAUBDIAxhDIEtAAIAAAWIAYgWICJAAIAiATIggA/IBUBUIhUhUIAgg/IAJgTICMAAIAJA0IA9AWIgOAiIAcAXIgcgXIAOgiIAehKIAgAAIELAAIBGAAIE6AAIBkAAIgQBKIgBAAIAXANIAOhXIDXAAIAEAAIB0AgIgTgTIAGgNIDEAAIAHAwIgwAXIBFApIgZBuIg6AGIgggRIgDAEIADgEIAgARIBMAmIgSB5Ig3AIgAvFCQIgJgmIALADIgNgOIACALgAvYA9IAIAiIgIgiIgWgCIAFgaIgLgGIBGiHIAdAFIgJgbIAJAbIgdgFIhGCHIALAGIgFAagAvuA7IirgPgAsfAvIAfhgIAGAAIBoAAIgPgiIBlhcIhlBcIAPAiIhoAAIgFgeIiSgYICSAYIAFAeIgGAAgALtAlIAkgqIgMgQIB1iwIh1CwIAMAQgARJhiIAGB0IgGh0IA3gcIg3AcgACWAGIBbjLgAAAgBIA9gZIg9AZIhchtgACDgKIgPgUIgEABIAEgBgAj2hBIAlgUIgKg8IAKA8gAQ7hbIAOgHIgOAHIhJhKIBJBKgAJ+h7Ig5ghIgOANIgMg2IAMA2IAOgNgAHmDGIACgPIAogIIANAXgADCDGIgKgPIAqg9IBVBMgAhEDGIALgkIADgKIAVhKIBwgDIAtgBIAsB8gAI7CrgAg6CaIAEgCIgDAKgADiB6gAN0BzgArjBkgABPBLgAvuA7gALqAkgAn0AigAogABIAkhlIBrADIAdBeIiAAlgAl0gDgAkCgOgAk2ggg");
        this.shape_1.setTransform(122.1,19.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("ARSDGIA3gIIASh5IhMgmIA6gGIAZhuIhFgpIAwgXIgHgwIAdAAIAAGLgAPpDGIgRhgIACgBIAyBhgAH6DGIgNgXIArgEIAOAbgAGMDGIBGgpIAJAUIASgCIgoAIIgCAPgACKDGIALgPIAKAPgAiuDGIAQgWIgRgXIAzgPIAXAUIAIgEIABAIIgLAkgApuDGIAPgIIgShXIACgBIAOAgIAlgEIAQAfIgBAlgAvxBqIgCgLIANAOgALHAkIADABIgEAGgAyigOIAXAPIgXAUgABggKIATAQIgCAFgAAagaIAmgPIANAMIgwARgAJbh7IABAAIAQhKIAUAAIgOBXgAj+iRIgJg0IBkAAIgeBKgAvRjFIBFAAIgxBDgANbjFIBnAAIgGANIATATgApfjFIAYAAIgYAWgAm+jFIArAAIgJATgAyijFIACAAIgCAEg");
        this.shape_2.setTransform(125.6,19.9);

        this.addChild(this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,247.3,42.7);


    (lib.ocean = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0033FF").s().p("EgjLADTIAAmlMBGWAAAIAAGlg");
        this.shape.setTransform(225.2,21.1);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,450.4,42.2);


    (lib.neilhighley_text = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#EA387E").ss(8,1,1).p("EAgAgG1IAABbQgJAZgEAFAfhmxIAACGIgeArIAAASIhnCOIgrBOIAAEsIg4AAIAAjpAXYk8IAAg0IhPAAAXxk8IgZAAATul9ICCAjIA8AeIAsAAAZMlwQAABjBGBFQBFBGBjAAAWxhCIgwAAIgigmAT7hkIA0AiIBSAAAT3lwIAAINIArAAIAeAjIC6AAAMCGoIAABTIAvBWIAAA8IBGBOIAiAAIBfAnIBfiTIAAgzIBWhbIAng0IAABwIg8AAAKoqaIi6AAIAAgvIg0AAQgcAHgCAGIgnAnACdtcIAABOIBOB5IArAAIAAAvAhTt/IAeAAIAAANIAbAAQAYAMABAKICeAAACdykIAAFIAE5tlIAAgaIEpAAAEax5IAAFiIArBJIAjAAIAAA9Amjw4IAAFZIArAeIAmBKAhXyGIAAIkIAaAAAiUlSIAAgrIAnA9IAAArAmfmbIAAA0IBJHhQAVAZAKgDQAPARAGAGIhSAAQAFgeAZgPADIlNIgrAAIAAgjIhXAAIAAA0QgVANAAAJQgPAdgGAFIAAFcIBSBSIB9geIAegrIAAhOIgaAAQgEgjgJgCIAAgeQgPgNgVgFIBLAAADikZIg9gwAo6HPIDgAAQAQgSAEgCID8AAABuIQIAAAaIhBA0IhqE3IAAAaIA8AnIDWAAIAAl4ADVI8IAAAiIA0A4IAAEyQgcAAgYAOAFSHhIAABrIAfB+IAABOIAiAAIAAAeIAJAMIAVAfIAAA7IgVgpIAAgxIAAi5ANDmOIAAIeQAJgPAAgLQAFgZAIgBIDXAAIAeA0IAAAWAQwBcIBOAAIAABbIhOAAIg8gvIhGAAgAK5mbIAAJsIgjAAIAAkoAGchTIDGAAAFbH7IEzAAIAeAnIAADCIh1A9IgzAAIAABIIDkCcIArAAIiOhwAEjxbIFQAAAGLl0IAAI9IgWAAAiLkeIAAHeAoqxJQgOALgMgDIgmgRIBAg4IAABBIEzAAApExBQAOgYAMAQApEhtQgCgEgDgDIgdkAIgeAAA/ZlaIAFAAIAAgjA/UlaIARAAIBOCsIAAASIBsCmIBaB1IAaAAIAAAvAz7lAIkhAAIBXHiIDcAqA3XhkICtAAQAegLANACA//DiIAAjHIArgtIAAlIAoqihQAAAYAqAQQAqARA7AAAo6hbQgFgLgFgHIAAEGIAaAAIAABWAxfAtIAAAcQAHATAKAQQAeAxAeA4AxfBJIAACeIAnAeIAiAAAvMlsIA0G8IBECjICxAAAx9lwQAACzAMCyQAEAvAOAlArOHyIAAgeQgSAQgIABIg4AAIhjAfIgjAqIgeAAIAAA9IB1BwIAAARIAjAAQABAfALgBIAAAaQAaAOAAAIIBWBJIBcB+IAABbIgfA4IkQAAQAAgcgBgCIgignIgiAAIg4hFIg0gjIAABKIAeAAQAAAcAAACIBOAAApEl4IAAELA6VB/IAApjAM2QFIgjAAAP9MPIAeD/IBRCXIAAhWIhRiPAGxOcIAACzIBbAAgAk3HPIAAJqIAmAe");
        this.shape.setTransform(204.9,119);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-4,-4,417.7,245.9);


    (lib.footer = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F97806").s().p("Eg1+AHlIAAvJMBr9AAAIAAPJg");
        this.shape.setTransform(345.6,48.5);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,691.2,97.1);


    (lib.failo_main_small = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#99CC00").s().p("AgOUnIgCgEIgIhPQgWkYAXkSQA0qNElodIgziFQihCnh5C/QmuKbApOnIAAADIgCACIgCAAIpmAAIgEgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBMAQOgpEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABIABABIADAAIACADID6KRQAiglAmgiQBNhJDDiaQimDSh9DlIKzcaIAAABIAEAKIAAAEIgCACIgEABIwGAAIgDgBg");
        this.shape.setTransform(102.5,132.1);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,205,264.1);


    (lib.failo_ball_small = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#99CC00").s().p("AkIEtIhamuIF+jbIFHEpIi2GQg");
        this.shape.setTransform(35.5,35);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,71,70);


    (lib.brick3 = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#817363").s().p("AgqAvIAAhdIBVAAIAABdg");
        this.shape.setTransform(4.3,4.8);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,8.7,9.5);


    (lib.brick2 = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#819193").s().p("AgqAvIAAhdIBVAAIAABdg");
        this.shape.setTransform(4.3,4.8);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,8.7,9.5);


    (lib.brick1 = function() {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C8B49E").s().p("AgqAvIAAhdIBVAAIAABdg");
        this.shape.setTransform(4.3,4.8);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,8.7,9.5);


    (lib.rocks = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.rocks_bg("synched",0);
        this.instance.setTransform(124,19.9,1,1,0,0,0,122.1,19.9);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("Ay+AOIgRAAIAAgcMAmfAAAIAAAEIAAAYg");
        this.shape.setTransform(123.3,1.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AzPDPIAAmDMAmOAAAIAAgaIARAAIAAGdg");
        this.shape_1.setTransform(125,21.1);

        this.addChild(this.shape_1,this.shape,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,-1.5,248.2,43.4);


    (lib.neilhighley_title = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.neilhighley_text("synched",0);
        this.instance.setTransform(204.8,119,1,1,0,0,0,204.8,119);

        this.instance_1 = new lib.neilhighley_text("synched",0);
        this.instance_1.setTransform(207.4,119.9,1,1,0,0,0,204.8,119);
        this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 127.5, 127.5, 0)];
        this.instance_1.cache(-6,-6,422,250);

        this.addChild(this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-4,-4,420.3,246.8);


    (lib.failo_text_small = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.failo_ball_small("synched",0);
        this.instance.setTransform(86.6,3,0.257,0.257,0,0,0,35.6,34.9);

        this.instance_1 = new lib.failo_main_small("synched",0);
        this.instance_1.setTransform(60.7,38,0.257,0.257,0,0,0,102.7,132.1);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AJjEAQhOhqAAiVQAAiTBOhpQBPhqBwAAQBvAABPBqQBPBpAACTQAACVhPBqQhPBphvAAQhwAAhPhpgAKui0QgyBNAABrQAABsAyBNQAzBNBHAAQBHAAAyhNQAzhNAAhsQAAhrgzhNQgyhNhHAAQhHAAgzBNgAwtFTIAAo1IgBAAIAAiHIHuAAIAACHImCAAIAAC5IDHAAIAABUIjHAAIAAEogABIFRIAAqvIBxAAIAAJIIFYAAIAABhIgGAAIAAAGgAhdFLIAAqvIBlAAIAAKvg");
        this.shape.setTransform(107.1,36.2);

        this.addChild(this.shape,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,-5.9,214.3,78.4);


    (lib.brick_row = function() {
        this.initialize();

        // Layer 1
        this.instance = new lib.brick3("synched",0);
        this.instance.setTransform(22.8,4.8,1,1,0,0,0,4.3,4.8);

        this.instance_1 = new lib.brick2("synched",0);
        this.instance_1.setTransform(13.4,4.8,1,1,0,0,0,4.3,4.8);

        this.instance_2 = new lib.brick1("synched",0);
        this.instance_2.setTransform(4.3,4.8,1,1,0,0,0,4.3,4.8);

        this.addChild(this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,27.2,9.5);


    (lib.house = function() {
        this.initialize();

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#999999").ss(3,1,1).p("AgOEFIAAACIAAHLImhAAIAAnCABhDpIADAAIFUAAIAAJ8AG4DYIAAARAgstkIAAFMAgDtcIAAE5AgTtYIACE3Am3EHIGpAAAgGLSIgIAAAmvLjIAAgRABkDpIAAJ2AENNiIAApx");
        this.shape.setTransform(-303.4,-42.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#999999").ss(4,1,1).p("AkOBvIGcgDIAIFZImcAEIgElRAiajoIESAJAiegqIDvAAAgyomIJNRKAg7oeInfRG");
        this.shape_1.setTransform(-300.3,-141.2);

        // Layer 2
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#666666").ss(3,1,1).p("AhmthIg9BWABBqJIgvAkAg8tIIiCCrAByqBIhpBTACWE8IgkAhACRFxIghApAF+ENIg/A3AGgEeIgvAvAFPJ3IgpA3AFYK8IgyBOACcMzIgnAvAlILbICoi/AhQIRIjBDPAjJENIjVEEAiYEVIi2Dg");
        this.shape_2.setTransform(-300.9,-43.7);

        // Layer 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#333333").ss(3,1,1).p("AjWtmIADE9ABxDQIAAATIAAJ2IAAARABKC8IF4gFIAIKgAAItpIAAFDAnJDuIAAHhIG/gDIAGnjIm6gGABKDKIAGKVAmiEPIAAGkAEiDrIACJp");
        this.shape_3.setTransform(-303,-41.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#CC3300").ss(2,1,1).p("AlygzIAqgqIAGAEIAwAZIAqggIA1AlIgTA9IglAAAk3AEIgiAFIgdg4IAEgEAkShAIADABIgFAeAmogdIgThAIA9gqIA8AuAk3AEIABALIABAbIAAAPIhYAgIg6hKIAbgnIAEgFIAVggIAhAKAjuACIABgBIACABIAyAhIgIAeIgFATIgDAMIgNAAIgyACIgWg6IAIgGIAoggIgZAAIgNgjIgFAhIgeAEAFIgJIgVhWIBOgxIBHA8IgWA2IgNAeIg3gDIgfgCIgFgBgADGAUIAdBEIBVgGIAEAAIAVhWIgCgBAG5COIguADIgSgrIADgCIAhgcIAnAZIgHAegADSgHIAzgsIBDAqAB6gSIgWguIA4g0IBCAlIgMBIAhxgfIgPgxIBKg1IBHA3IgRA2IAFgHIA1AYIgHA4Ig2ALIgdgyIADgDIgugBIAcALIgDAyIgCAaIhDARIgHACIgMgUIgPgYIgOgVIAxg4IANAFgAAAgYIgKAfIgTAAAiZBEIgHACIglg/IAwg2IAkAQAAoCEIgpAEIgOgfIgEgJIAEgEIAagZIAmAVgAhpgEIAeAKADOgEIAEgDADDAMIgDgHIAOgJIgkAEIAZAMIAFACIgCAGIgBAHIgJA8IgBAJIggAFIgvAHIgDAAIAAgBIgmhIIAjgjIAUgSIADgDIAtAV");
        this.shape_4.setTransform(-304.9,-69.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#333333").ss(4,1,1).p("AkXHDIgGl3AgyoSIgFANIIxQYACmA+IAGGDInAACAkXA7IGyAOAg3oFInDQW");
        this.shape_5.setTransform(-300.4,-139.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AgcgzIAHBtAhGg1IABByAAUg1IAIBtAA+g8IAJB5");
        this.shape_6.setTransform(-305.1,-154.8);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#AAAAA9").ss(4,1,1).p("AgcguIAHBhAhIgyIAFBlABDguIAGBWAAUgyIAIBl");
        this.shape_7.setTransform(-303.9,-154.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#589CE3").s().p("AB5NmIgOAAIAAp2IAOAAIAAJ2IAAp2IEzAAIAAJ2gAEtNhIgDppgAmrLOIAAnIIGfAAIAAHIgAmaLAIAAmkgAB5DwgAAQoZIAAlEIAAFEIjrAAIAAlMIGDAAIAAFMgAjLocIgDk+g");
        this.shape_8.setTransform(-303.9,-42.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#993300").s().p("AF5BmIADgCIAhgbIAoAZIgHAdIgFAQIgvACgAgPBpIgEgJIAEgEIAagZIAmAWIgIAqIgqAFgAiKBcIgPgYIgNgVIAwg4IANAFIgIgcIAIAcIgNgFIgwA4IANAVIgHACIglg/IAxg2IAjAPIgPgwIBKg0IBHA2IgRA2IAGgHIA0AYIgHA3Ig2ALIgcgxIADgDIASAAIAKgfIgKAfIgSAAIgugBIAbALIgDAyIgCAaIhDARIgHABgAhKAGIgfgKgABpBsIgmhJIAkgjIAUgSIACgEIAsAWIgsgWIgCAEIgXgtIA4g1IBCAlIgMBIIgEADIglAEIAaALIAEACIgBAHIgBAHIgJA9IgBAHIgfAFIgwAIIgDABgAkeAnIAIgFIApggIgaAAIgNgjIAFgeIgDgCIADACIgFAeIgFAhIgdADIAAANIABAaIABAPIhZAgIg6hJIAcgoIADgFIAVggIAhAKIAqgqIAGAEIAwAYIAqgfIA1AlIgTA8IglABIAzAhIgIAdIgGAUIgDALIgNABIgxACgAl2gvIAdA4IAjgGIgjAGIgdg4IAEgEIgEAEgAjrACIgBgBIgBABIABgBgADGAUIABgHIgEgCIgCgGIANgJIAEgDIAzgsIBEAqIABADIAGABIgGgBIgBgDIgWhWIBOgxIBHA7IgWA3IgNAeIg3gDIgegCIABABIgVBWIgEAAIhVAHgAm7hdIA+gqIA7AuIgGgEIgqAqIghgKIgVAggAlChZg");
        this.shape_9.setTransform(-304.9,-69.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#009966").s().p("AGQBdIAxgnIA0AiIgRA9Ig+ACgAgbBdIAeggIApAUIgHAuIgsAHgADmBuIgghIIA6gyIBEAlIgQBNIhAAGIgNACgAjxAiIAgg+IANgBIADgLIAyAHIAKABIAMATIAHgBIAKA7IABAHIABADIhNAngAlGAuIgFgKIgDgGIAqgoIA1AZIgKA7Ig7AJgAmwAgIhBgUIgDiHIBNgbIgbApIA6BKIBYggIAAgPIARAXIhEBhIgEAGIgGAIgAHJgbIgngZIghAcIgQgvIA+gtIA+AsIgWBIIgVAAgABxgQIAvgIIgHAPgABjgSIAAAAIgagFIgGgoIgGgnIAugXIgjAkIAlBIg");
        this.shape_10.setTransform(-305.4,-56.9);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#006633").s().p("AnvBiIAOgPIgGAAIgThAIAZgSIBEAUIAGgIIAKAHIgEAOIAKAEIgDgJIAUgOIASAlIA7gJIAJg5Ig0gbIgqApIACAEIgXADIBEhhIgSgYIgBgaIAhASIgIAGIAWA6IAygCIghA+IA+A9IBOgoIgBgCIAzAgIAAACIAGgHIgHgNIAtgpIgDgBIAAgIIgqAyIgzgVIgLg7IBEgRIABgaIAkA2IAAgRIANAfIAsgEIAGgrIgkgVIgbAZIAAgTIBGgXIAHALIAGAoIAZAEIABAAIAKACIAAABIAEgBIAnAHIAIgOIAggFIABgIIAtAcIgCAIIAZgaIgfACIgchJIABgGIAcBEIBWgHIAwAZIAHgKIgjhEIAhghIA4ADIAMgeIBEAiIgEAWIA1AjIggByIgPABIABBjIiFAsIguhAIhHALIgQggIBAgGIAQhMIhDgmIg7AyIAhBIIABAAIgPBAIhaAGIgBgEIhQANIgTgkIgEAdIhNAMIgUgnIhCADIgVg1IgfACIAMAIIgSA7Ig9AAIgOgsIgNAAIgJBHIhlATgAFgA+IAVA6IA/gCIARg9Ig1gigAhMA+IAVAoIAtgHIAHgtIgogVgAj8BEIgIgWIgXACIgCAHIAHgGIAaATgAAQAIIASAJIgDARIAaANIgZg8gAFBhmIAPAuIgCADIARAqIAvgCIAEgQIAVgBIAWhJIg/gtgAjxhHIAFgUIAsAag");
        this.shape_11.setTransform(-300.5,-53.7);

        // Layer 4 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("A7qTHQgGgGAAgIIAF04QAAgEACgEIHaw5QADgHAHgDQAHgDAHACQAIADADAHIJDQfQACAEABAFIAEVNQAAAIgGAGQgGAGgIAAIwmAFIAAAAQgIAAgGgGg");
        mask.setTransform(-177.7,-74.1);

        // Layer 5
        this.instance = new lib.brick_row("synched",0);
        this.instance.setTransform(-245.1,40.3,1,1,0,0,0,13.6,4.8);

        this.instance_1 = new lib.brick_row("synched",0);
        this.instance_1.setTransform(-273.1,40.3,1,1,0,0,0,13.6,4.8);

        this.instance_2 = new lib.brick_row("synched",0);
        this.instance_2.setTransform(-356.3,40.1,1,1,0,0,0,13.6,4.8);

        this.instance_3 = new lib.brick_row("synched",0);
        this.instance_3.setTransform(-328.4,40.3,1,1,0,0,0,13.6,4.8);

        this.instance_4 = new lib.brick_row("synched",0);
        this.instance_4.setTransform(-300.3,40.3,1,1,0,0,0,13.6,4.8);

        this.instance_5 = new lib.brick_row("synched",0);
        this.instance_5.setTransform(-236.7,30.1,1,1,0,0,0,13.6,4.8);

        this.instance_6 = new lib.brick_row("synched",0);
        this.instance_6.setTransform(-264.8,30.1,1,1,0,0,0,13.6,4.8);

        this.instance_7 = new lib.brick_row("synched",0);
        this.instance_7.setTransform(-348,29.9,1,1,0,0,0,13.6,4.8);

        this.instance_8 = new lib.brick_row("synched",0);
        this.instance_8.setTransform(-320.1,30.1,1,1,0,0,0,13.6,4.8);

        this.instance_9 = new lib.brick_row("synched",0);
        this.instance_9.setTransform(-291.9,30.1,1,1,0,0,0,13.6,4.8);

        this.instance_10 = new lib.brick_row("synched",0);
        this.instance_10.setTransform(-243.9,19.7,1,1,0,0,0,13.6,4.8);

        this.instance_11 = new lib.brick_row("synched",0);
        this.instance_11.setTransform(-271.9,19.7,1,1,0,0,0,13.6,4.8);

        this.instance_12 = new lib.brick_row("synched",0);
        this.instance_12.setTransform(-355.1,19.5,1,1,0,0,0,13.6,4.8);

        this.instance_13 = new lib.brick_row("synched",0);
        this.instance_13.setTransform(-327.2,19.7,1,1,0,0,0,13.6,4.8);

        this.instance_14 = new lib.brick_row("synched",0);
        this.instance_14.setTransform(-299.1,19.7,1,1,0,0,0,13.6,4.8);

        this.instance_15 = new lib.brick_row("synched",0);
        this.instance_15.setTransform(-236.9,9.4,1,1,0,0,0,13.6,4.8);

        this.instance_16 = new lib.brick_row("synched",0);
        this.instance_16.setTransform(-265,9.4,1,1,0,0,0,13.6,4.8);

        this.instance_17 = new lib.brick_row("synched",0);
        this.instance_17.setTransform(-348.2,9.2,1,1,0,0,0,13.6,4.8);

        this.instance_18 = new lib.brick_row("synched",0);
        this.instance_18.setTransform(-320.3,9.4,1,1,0,0,0,13.6,4.8);

        this.instance_19 = new lib.brick_row("synched",0);
        this.instance_19.setTransform(-292.1,9.4,1,1,0,0,0,13.6,4.8);

        this.instance_20 = new lib.brick_row("synched",0);
        this.instance_20.setTransform(-243.7,-0.9,1,1,0,0,0,13.6,4.8);

        this.instance_21 = new lib.brick_row("synched",0);
        this.instance_21.setTransform(-271.7,-0.9,1,1,0,0,0,13.6,4.8);

        this.instance_22 = new lib.brick_row("synched",0);
        this.instance_22.setTransform(-354.9,-1.1,1,1,0,0,0,13.6,4.8);

        this.instance_23 = new lib.brick_row("synched",0);
        this.instance_23.setTransform(-327,-0.9,1,1,0,0,0,13.6,4.8);

        this.instance_24 = new lib.brick_row("synched",0);
        this.instance_24.setTransform(-298.9,-0.9,1,1,0,0,0,13.6,4.8);

        this.instance_25 = new lib.brick_row("synched",0);
        this.instance_25.setTransform(-234.2,-11.5,1,1,0,0,0,13.6,4.8);

        this.instance_26 = new lib.brick_row("synched",0);
        this.instance_26.setTransform(-262.3,-11.5,1,1,0,0,0,13.6,4.8);

        this.instance_27 = new lib.brick_row("synched",0);
        this.instance_27.setTransform(-345.5,-11.7,1,1,0,0,0,13.6,4.8);

        this.instance_28 = new lib.brick_row("synched",0);
        this.instance_28.setTransform(-317.6,-11.5,1,1,0,0,0,13.6,4.8);

        this.instance_29 = new lib.brick_row("synched",0);
        this.instance_29.setTransform(-289.4,-11.5,1,1,0,0,0,13.6,4.8);

        this.instance_30 = new lib.brick_row("synched",0);
        this.instance_30.setTransform(-243.7,-21.9,1,1,0,0,0,13.6,4.8);

        this.instance_31 = new lib.brick_row("synched",0);
        this.instance_31.setTransform(-271.8,-21.9,1,1,0,0,0,13.6,4.8);

        this.instance_32 = new lib.brick_row("synched",0);
        this.instance_32.setTransform(-355,-22.1,1,1,0,0,0,13.6,4.8);

        this.instance_33 = new lib.brick_row("synched",0);
        this.instance_33.setTransform(-327.1,-21.9,1,1,0,0,0,13.6,4.8);

        this.instance_34 = new lib.brick_row("synched",0);
        this.instance_34.setTransform(-298.9,-21.9,1,1,0,0,0,13.6,4.8);

        this.instance_35 = new lib.brick_row("synched",0);
        this.instance_35.setTransform(-250.9,-32.3,1,1,0,0,0,13.6,4.8);

        this.instance_36 = new lib.brick_row("synched",0);
        this.instance_36.setTransform(-278.9,-32.3,1,1,0,0,0,13.6,4.8);

        this.instance_37 = new lib.brick_row("synched",0);
        this.instance_37.setTransform(-362.1,-32.5,1,1,0,0,0,13.6,4.8);

        this.instance_38 = new lib.brick_row("synched",0);
        this.instance_38.setTransform(-334.2,-32.3,1,1,0,0,0,13.6,4.8);

        this.instance_39 = new lib.brick_row("synched",0);
        this.instance_39.setTransform(-306.1,-32.3,1,1,0,0,0,13.6,4.8);

        this.instance_40 = new lib.brick_row("synched",0);
        this.instance_40.setTransform(-243.9,-42.6,1,1,0,0,0,13.6,4.8);

        this.instance_41 = new lib.brick_row("synched",0);
        this.instance_41.setTransform(-272,-42.6,1,1,0,0,0,13.6,4.8);

        this.instance_42 = new lib.brick_row("synched",0);
        this.instance_42.setTransform(-355.2,-42.8,1,1,0,0,0,13.6,4.8);

        this.instance_43 = new lib.brick_row("synched",0);
        this.instance_43.setTransform(-327.3,-42.6,1,1,0,0,0,13.6,4.8);

        this.instance_44 = new lib.brick_row("synched",0);
        this.instance_44.setTransform(-299.1,-42.6,1,1,0,0,0,13.6,4.8);

        this.instance_45 = new lib.brick_row("synched",0);
        this.instance_45.setTransform(-250.7,-52.9,1,1,0,0,0,13.6,4.8);

        this.instance_46 = new lib.brick_row("synched",0);
        this.instance_46.setTransform(-278.7,-52.9,1,1,0,0,0,13.6,4.8);

        this.instance_47 = new lib.brick_row("synched",0);
        this.instance_47.setTransform(-361.9,-53.1,1,1,0,0,0,13.6,4.8);

        this.instance_48 = new lib.brick_row("synched",0);
        this.instance_48.setTransform(-334,-52.9,1,1,0,0,0,13.6,4.8);

        this.instance_49 = new lib.brick_row("synched",0);
        this.instance_49.setTransform(-305.9,-52.9,1,1,0,0,0,13.6,4.8);

        this.instance_50 = new lib.brick_row("synched",0);
        this.instance_50.setTransform(-241.2,-63.5,1,1,0,0,0,13.6,4.8);

        this.instance_51 = new lib.brick_row("synched",0);
        this.instance_51.setTransform(-269.3,-63.5,1,1,0,0,0,13.6,4.8);

        this.instance_52 = new lib.brick_row("synched",0);
        this.instance_52.setTransform(-352.5,-63.7,1,1,0,0,0,13.6,4.8);

        this.instance_53 = new lib.brick_row("synched",0);
        this.instance_53.setTransform(-324.6,-63.5,1,1,0,0,0,13.6,4.8);

        this.instance_54 = new lib.brick_row("synched",0);
        this.instance_54.setTransform(-296.4,-63.5,1,1,0,0,0,13.6,4.8);

        this.instance_55 = new lib.brick_row("synched",0);
        this.instance_55.setTransform(-234.2,-74.1,1,1,0,0,0,13.6,4.8);

        this.instance_56 = new lib.brick_row("synched",0);
        this.instance_56.setTransform(-262.3,-74.1,1,1,0,0,0,13.6,4.8);

        this.instance_57 = new lib.brick_row("synched",0);
        this.instance_57.setTransform(-345.5,-74.3,1,1,0,0,0,13.6,4.8);

        this.instance_58 = new lib.brick_row("synched",0);
        this.instance_58.setTransform(-317.6,-74.1,1,1,0,0,0,13.6,4.8);

        this.instance_59 = new lib.brick_row("synched",0);
        this.instance_59.setTransform(-289.4,-74.1,1,1,0,0,0,13.6,4.8);

        this.instance_60 = new lib.brick_row("synched",0);
        this.instance_60.setTransform(-301.1,-189.4,1,1,0,0,0,13.6,4.8);

        this.instance_61 = new lib.brick_row("synched",0);
        this.instance_61.setTransform(-308.4,-179,1,1,0,0,0,13.6,4.8);

        this.instance_62 = new lib.brick_row("synched",0);
        this.instance_62.setTransform(-315.5,-168.4,1,1,0,0,0,13.6,4.8);

        this.instance_63 = new lib.brick_row("synched",0);
        this.instance_63.setTransform(-287.6,-168.2,1,1,0,0,0,13.6,4.8);

        this.instance_64 = new lib.brick_row("synched",0);
        this.instance_64.setTransform(-322.6,-157.9,1,1,0,0,0,13.6,4.8);

        this.instance_65 = new lib.brick_row("synched",0);
        this.instance_65.setTransform(-294.3,-157.9,1,1,0,0,0,13.6,4.8);

        this.instance_66 = new lib.brick_row("synched",0);
        this.instance_66.setTransform(-328.2,-147.8,1,1,0,0,0,13.6,4.8);

        this.instance_67 = new lib.brick_row("synched",0);
        this.instance_67.setTransform(-300,-147.8,1,1,0,0,0,13.6,4.8);

        this.instance_68 = new lib.brick_row("synched",0);
        this.instance_68.setTransform(-272.1,-147.6,1,1,0,0,0,13.6,4.8);

        this.instance_69 = new lib.brick_row("synched",0);
        this.instance_69.setTransform(-335.2,-137.2,1,1,0,0,0,13.6,4.8);

        this.instance_70 = new lib.brick_row("synched",0);
        this.instance_70.setTransform(-223.7,-137,1,1,0,0,0,13.6,4.8);

        this.instance_71 = new lib.brick_row("synched",0);
        this.instance_71.setTransform(-306.9,-137.2,1,1,0,0,0,13.6,4.8);

        this.instance_72 = new lib.brick_row("synched",0);
        this.instance_72.setTransform(-279,-137,1,1,0,0,0,13.6,4.8);

        this.instance_73 = new lib.brick_row("synched",0);
        this.instance_73.setTransform(-342.3,-126.6,1,1,0,0,0,13.6,4.8);

        this.instance_74 = new lib.brick_row("synched",0);
        this.instance_74.setTransform(-314.1,-126.6,1,1,0,0,0,13.6,4.8);

        this.instance_75 = new lib.brick_row("synched",0);
        this.instance_75.setTransform(-286.2,-126.4,1,1,0,0,0,13.6,4.8);

        this.instance_76 = new lib.brick_row("synched",0);
        this.instance_76.setTransform(-258,-126.4,1,1,0,0,0,13.6,4.8);

        this.instance_77 = new lib.brick_row("synched",0);
        this.instance_77.setTransform(-349.5,-115.8,1,1,0,0,0,13.6,4.8);

        this.instance_78 = new lib.brick_row("synched",0);
        this.instance_78.setTransform(-321.3,-115.8,1,1,0,0,0,13.6,4.8);

        this.instance_79 = new lib.brick_row("synched",0);
        this.instance_79.setTransform(-293.4,-115.6,1,1,0,0,0,13.6,4.8);

        this.instance_80 = new lib.brick_row("synched",0);
        this.instance_80.setTransform(-265.2,-115.6,1,1,0,0,0,13.6,4.8);

        this.instance_81 = new lib.brick_row("synched",0);
        this.instance_81.setTransform(-355.2,-105.6,1,1,0,0,0,13.6,4.8);

        this.instance_82 = new lib.brick_row("synched",0);
        this.instance_82.setTransform(-243.7,-105.4,1,1,0,0,0,13.6,4.8);

        this.instance_83 = new lib.brick_row("synched",0);
        this.instance_83.setTransform(-326.9,-105.6,1,1,0,0,0,13.6,4.8);

        this.instance_84 = new lib.brick_row("synched",0);
        this.instance_84.setTransform(-299,-105.4,1,1,0,0,0,13.6,4.8);

        this.instance_85 = new lib.brick_row("synched",0);
        this.instance_85.setTransform(-270.9,-105.4,1,1,0,0,0,13.6,4.8);

        this.instance_86 = new lib.brick_row("synched",0);
        this.instance_86.setTransform(-362.1,-95,1,1,0,0,0,13.6,4.8);

        this.instance_87 = new lib.brick_row("synched",0);
        this.instance_87.setTransform(-250.7,-94.8,1,1,0,0,0,13.6,4.8);

        this.instance_88 = new lib.brick_row("synched",0);
        this.instance_88.setTransform(-333.9,-95,1,1,0,0,0,13.6,4.8);

        this.instance_89 = new lib.brick_row("synched",0);
        this.instance_89.setTransform(-306,-94.8,1,1,0,0,0,13.6,4.8);

        this.instance_90 = new lib.brick_row("synched",0);
        this.instance_90.setTransform(-277.8,-94.8,1,1,0,0,0,13.6,4.8);

        this.instance_91 = new lib.brick_row("synched",0);
        this.instance_91.setTransform(-257.8,-84.2,1,1,0,0,0,13.6,4.8);

        this.instance_92 = new lib.brick_row("synched",0);
        this.instance_92.setTransform(-341,-84.4,1,1,0,0,0,13.6,4.8);

        this.instance_93 = new lib.brick_row("synched",0);
        this.instance_93.setTransform(-313.1,-84.2,1,1,0,0,0,13.6,4.8);

        this.instance_94 = new lib.brick_row("synched",0);
        this.instance_94.setTransform(-285,-84.2,1,1,0,0,0,13.6,4.8);

        this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = this.instance_63.mask = this.instance_64.mask = this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = this.instance_69.mask = this.instance_70.mask = this.instance_71.mask = this.instance_72.mask = this.instance_73.mask = this.instance_74.mask = this.instance_75.mask = this.instance_76.mask = this.instance_77.mask = this.instance_78.mask = this.instance_79.mask = this.instance_80.mask = this.instance_81.mask = this.instance_82.mask = this.instance_83.mask = this.instance_84.mask = this.instance_85.mask = this.instance_86.mask = this.instance_87.mask = this.instance_88.mask = this.instance_89.mask = this.instance_90.mask = this.instance_91.mask = this.instance_92.mask = this.instance_93.mask = this.instance_94.mask = mask;

        // Layer 6
        this.instance_95 = new lib.brick3("synched",0);
        this.instance_95.setTransform(-273.7,-133.8,1,1,0,0,0,4.3,4.8);

        this.instance_96 = new lib.brick3("synched",0);
        this.instance_96.setTransform(-264.3,-123.7,1,1,0,0,0,4.3,4.8);

        this.instance_97 = new lib.brick1("synched",0);
        this.instance_97.setTransform(-264.4,-133.7,1,1,0,0,0,4.3,4.8);

        this.instance_98 = new lib.brick_row("synched",0);
        this.instance_98.setTransform(-273.1,-143.8,1,1,0,0,0,13.6,4.8);

        this.addChild(this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-356.2,-198.4,111.9,246.2);




})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;