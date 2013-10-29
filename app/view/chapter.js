Ext.define('MathPASS.view.course',{
    extend: 'Ext.dataview.DataView',
    xtype:'chapterview',
    config:{
store:Ext.create('Ext.data.Store',{
    model:'MathPASS.model.course',
autoLoad:true,
autoDestroy:true,
proxy:{
    type:'ajax',
url:'http://202.201.13.85/mathpass/course.php',
reader:{
    type:'json'
}
}
})
            
    }
})
