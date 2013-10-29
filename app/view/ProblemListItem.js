/**
 * @class voice.view.ChapterListItem
 * @extends Ext.dataview.component.DataItem
 * Description
 */
Ext.define('MathPASS.view.ProblemListItem', {
	extend: 'Ext.dataview.component.DataItem',
	xtype: 'problemlistitem',

	config: {
		styleHtmlContent: true,
		items: [
		 {
			xtype: 'label',
			html: 'title',
            baseCls: 'user',
			itemId: 'myLabel',
			flex: 1
		}]
	},

	updateRecord: function(record) {
		var me = this;
        if(record!=null)
        {
        var problemsDisplay="P"+record.get('number');
        problemsDisplay+=". ";
        problemsDisplay+=record.get("title");
		me.down('#myLabel')
			.setHtml(problemsDisplay);
        }
		me.callParent(arguments);
	}
});
