const moment = require('moment')

module.exports = {
  //set the format for the date
  formatDate: function (date, format) {
    return moment(date).utc().format(format)
  },
  //set maximum string length 
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + ' '
      new_str = str.substr(0, len)
      new_str = str.substr(0, new_str.lastIndexOf(' '))
      new_str = new_str.length > 0 ? new_str : str.substr(0, len)
      return new_str + '...'
    }
    return str
  },
  //removes html tags
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, '')
  },
  //used to create edit button 
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}"><div  class="bg-primary text-white" style=" width:50px; height:50px; border-radius:50%; position:absolute; right:0px;"><i class="fa fa-2x fa-edit" style=" postion:relative; top:50%; left:50%;"></i></div></a>`
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fa fa-edit"></i></a>`
      }
    } else {
      return ''
    }
  },
  //used to change the selected option of the story type
  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp('>' + selected + '</option>'),
        ' selected="selected"$&'
      )
  },
  formatIndex: function(index)  {
    return index+1;
  },
}