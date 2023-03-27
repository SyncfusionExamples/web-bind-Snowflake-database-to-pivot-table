var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        url: 'https://localhost:44378/Pivot',
        enableSorting: true,
        expandAll: false,
        dataSource: [],
        columns: [
            { name: 'CC_COUNTRY', caption: 'Country' }
        ],
	rows: [
	    { name: 'CC_STATE', caption: 'State' },
	    { name: 'CC_CITY', caption: 'City' }
	],
	values: [
	    { name: 'CC_COMPANY', caption: 'Company' },
	    { name: 'CC_EMPLOYEES', caption: 'Employees' },
	    { name: 'CC_TAX_PERCENTAGE', caption: 'Percentage' },
	],
	filters: []
    },
    showFieldList: true,
    width: '100%'
});
pivotObj.appendTo('#PivotView');
