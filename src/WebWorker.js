/**
 * @class Ext.ux.WebWorker
 * @author Vincenzo Ferrari <wilk3ert@gmail.com>
 *
 * Wrapper for HTML5 WebWorker
 * 
 * This class provide an interface for HTML5 WebWorker.
 *
 * <h1>Pure text communication</h1>
 * The communication is text-only, without objects or any other kind of data.
 *
 *     var webworker = Ext.create ('Ext.ux.WebWorker', {
 *       file: 'myWorker.js' ,
 *       listeners: {
 *         message: function (ww, message) {
 *           console.log ('A new message is arrived: ' + message);
 *         } ,
 *         error: function (ww, error) {
 *           Ext.Error.raise (error);
 *         }
 *       }
 *     });
 *
 * <h1>Pure event-driven communication</h1>
 * The communication is event-driven: an event and a String or Object are sent and the webworker handles different events.
 *
 *     var webworker = Ext.create ('Ext.ux.WebWorker', {
 *       file: 'myWorker.js' ,
 *       listeners: {
 *         message: function (ww, message) {
 *           ww.send ('parse', 'a string to parse');
 *           ww.send ('verify equation', {
 *             equation: 'x+y-z=10' ,
 *             x: 10 ,
 *             y: 5 ,
 *             z: 5
 *           });
 *         }
 *       }
 *     });
 *     
 *     // A 'terminate' event is sent from the worker (myWorker.js)
 *     // 'data' has 'log' and 'msg' fields
 *     webworker.on ('terminate', function (data) {
 *       console.log ('Log: ' + data.log);
 *       console.log ('Message: ' + data.msg);
 *     });
 *
 * <h1Mixed communication</h1>
 * The communication is mixed: it can handles text-only and event-driven communication.
 *
 *     var webworker = Ext.create ('Ext.ux.WebWorker', {
 *       file: 'myWorker.js' ,
 *       listeners: {
 *         message: function (ww, message) {
 *           console.log ('Text-only message arrived is: ' + message);
 *           
 *           ww.send ('parse', 'a string to parse');
 *           ww.send ('verify equation', {
 *             equation: 'x+y-z=10' ,
 *             x: 10 ,
 *             y: 5 ,
 *             z: 5
 *           });
 *         }
 *       }
 *     });
 *     
 *     // A 'terminate' event is sent from the worker (myWorker.js)
 *     // 'data' has 'log' and 'msg' fields
 *     webworker.on ('terminate', function (data) {
 *       console.log ('Log: ' + data.log);
 *       console.log ('Message: ' + data.msg);
 *     });
 */

Ext.define('Ext.ux.WebWorker', 
{
	alias: 'webworker' ,
	
	mixins: {
		observable: 'Ext.util.Observable'
	},
	
	config: {
		blob: '' ,
		file: '' ,
		itemId: ''
	},
	

	resetBlob: function(v)
	{
		var me = this;
		me.stop();
		me.setBlob(v);
		me.init({ blob: v });
	},


	constructor: function(cfg) 
	{
		this.init(cfg, true);
	},


	init: function(cfg, construct) 
	{
		var me = this;

		if (construct) {
			me.initConfig(cfg);
			me.id = Ext.id();
		}
		else {
			me.initConfig(Ext.merge(me.initialConfig, cfg));
		}
		me.mixins.observable.constructor.call(me, cfg);
		/*
		me.addEvents (
			'error' ,
			'message'
		);
		*/
		try {
			// Makes inline worker
			if (Ext.isEmpty(me.getFile())) 
			{
				var winURL = window.URL || window.webkitURL ,				
					blob = new Blob([me.getBlob()], { type: 'text/plain' }) ,
					inlineFile = winURL.createObjectURL(blob);
				
				me.worker = new Worker(inlineFile);
			}
			// Uses file
			else {
				me.worker = new Worker(me.getFile());
			}
			
			me.worker.onmessage = function(message) 
			{
				// Message event is always sent
				me.fireEvent('message', me, message.data);
				/*
					message.data : object
					msg.event : event to raise
					msg.data : data to handle
				*/
				if (Ext.isObject(message.data)) me.fireEvent(message.data.event, me, message.data.data);
			};
			
			me.worker.onerror = function(message) {
				me.fireEvent('error', me, message);
			};
		}
		catch(err) {
			Ext.Error.raise(err);

			return null;
		}
		
		return me;
	},
	
	
	send: function(events, data) 
	{
		var me = this;
		
		if (!me.worker) {
			return;
		}

		// Treats it as a normal message
		if (arguments.length === 1) {
			if (Ext.isString(events)) me.worker.postMessage(events);
			else Ext.Error.raise('String expected!');
		}
		// Treats it as an event-driven message
		else if (arguments.length >= 2) {
			if (Ext.isString(events)) events = [events];
			
			Ext.each(events, function (event) {
				var msg = {
					event: event ,
					data: data
				};
				
				me.worker.postMessage(msg);
			});
		}
	},
	
	
	stop: function () 
	{
		if (this.worker) {
			this.worker.terminate();
		}
	}
	
});