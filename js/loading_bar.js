const STATE_HIDDEN = 'hidden';
const STATE_SHOWN = 'shown';

class TextSpinner {
	constructor() {
  	jQuery('body').append('<div data-container></div>');
    
  	this._state = STATE_HIDDEN;
    this._element = jQuery('[data-container]');
  }
  
  show(texts, mode) {
  	if(this._state === STATE_SHOWN || texts.length === 0) {
    	return this;
    }
    
    this._element.hide();
    
    switch(mode) {
    	case 0:
      	this.renderMode0(texts);
      	break;
      case 1:
      	this.renderMode1(texts)
      	break;
      case 2:
      	this.renderMode2(texts);
      	break;
      default:
      	this.renderMode0(texts);
      	break;
    }
    
    this._element.show();
    
    this._state = STATE_SHOWN;
  	
    return this;
  }
  
  render(texts) {
  	var self = this;
    var amountOfTexts = texts.length;
    
  	self._element.append('<div class="loading-text-container"><div data-text-wrapper class="text-wrapper-' + amountOfTexts + '"></div></div>');
    
    texts.forEach(function(text) {
    	self._element.find('[data-text-wrapper]').append('<div class="loading-text"><div>' + text + '</div></div>');
    });
  
  	return this;
  }
  
  renderMode0(texts) {
  	this._element.addClass('loading-container-mode-0').append('<div class="loading"></div>');
    
  	return this.render(texts);
  }
  
  renderMode1(texts) {
  	this._element.addClass('loading-container-mode-1').append('<div class="loading"></div>');
    
  	return this.render(texts);
  }
  
  renderMode2(texts) {
  	this._element.addClass('loading-container-mode-2').append('<div class="loading">' +
      '<div class="dashing"><div></div></div>' +
      '<div class="dashing"><div></div></div>' +
      '<div class="dashing"><div></div></div>' +
      '<div class="dashing"><div></div></div>' +
    '</div>');
    
  	return this.render(texts);
  }
  
  hide() {
  	if(this._state === STATE_HIDDEN) {
    	return this;
    }
    
    this._element.removeClass().find('div').detach();
    
    this._state = STATE_HIDDEN;
    
 		return this;
  }
}
