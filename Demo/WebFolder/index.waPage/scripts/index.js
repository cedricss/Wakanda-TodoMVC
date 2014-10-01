
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btnAdd = {};	// @button
	var btnCompleted = {};	// @button
	var btnAll = {};	// @button
	var btnActive = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btnAdd.click = function btnAdd_click (event)// @startlock
	{// @endlock
		sources.items.addNewElement;
		sources.items.name = textFieldTodo.getValue();
		sources.items.save();
	};// @lock

	btnCompleted.click = function btnCompleted_click (event)// @startlock
	{// @endlock
		sources.items.filterQuery('done = true');
	};// @lock

	btnAll.click = function btnAll_click (event)// @startlock
	{// @endlock
		sources.items.filterQuery('');
		sources.item.
	};// @lock

	btnActive.click = function btnActive_click (event)// @startlock
	{// @endlock

		sources.items.filterQuery('done = false');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btnAdd", "click", btnAdd.click, "WAF");
	WAF.addListener("btnCompleted", "click", btnCompleted.click, "WAF");
	WAF.addListener("btnAll", "click", btnAll.click, "WAF");
	WAF.addListener("btnActive", "click", btnActive.click, "WAF");
// @endregion
};// @endlock
