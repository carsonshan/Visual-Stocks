$(function() {

	var sectors = {};
	sectors["basic materials"] = ["XOM", "CVX"];
	sectors["conglomerates"] = [];
	sectors["consumer goods"] =["PG"];
	sectors["financials"] = ["WFC", "HDB", "JPM", "GGAL", "BMA", "USB", "BFR", "CMA", "BAC". "BSAC"];
	sectors["healthcare"] = ["UNH", "BMY", "VHT", "XLV", "THC", "BSX", "MNK", "JNJ", "MDT", "MRK"];
	sectors["industrial goods"] = [];
	sectors["services"] = [];
	sectors["technology"] =["ACN", "CTSH", "HCKT", "BAH", "INFN", "BIDU", "GOOG", "GOOGL", "MSFT", "AAPL"];
	sectors["utilities"] = ["ABY", "CVA", "BIP", "OTTR", "ETR", "SO", "NRG", "POM", "DUK", "TAC"];


    $("#tech").click(function() {
    	// show data for technology stocks
    	sectors["technology"];
    });
    $("#fin").click(function() {
    	sectors["financials"];
    });
    $("#healthcare").click(function() {
    	sectors["healthcare"];
    });
    $("#util").click(function() {
        sectors["utilities"];
    });
  });