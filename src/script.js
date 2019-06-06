/**
 * Created by nutan on 06/06/19.
 */

$(document).ready(function () {
    var campaignArr = [
        {
            'date': '2017/05/01',
            'past_day': '330 days ago',
            'campaign': 'Test Watsapp'
        },
        {
            'date': '2016/04/17',
            'past_day': '710 days ago',
            'campaign': 'Lorem Ipsum'
        },
        {
            'date': '2016/04/17',
            'past_day': '713 days ago',
            'campaign': 'Super Jewels Quest'
        },
        {
            'date': '2016/04/17',
            'past_day': '713 days ago',
            'campaign': 'Mole Slayer'
        },
        {
            'date': '2016/04/17',
            'past_day': '713 days ago',
            'campaign': 'Mancala Mix'
        }
    ];
    $.datetimepicker.setDateFormatter({
        parseDate: function (date, format) {
            var d = moment(date, format);
            return d.isValid() ? d.toDate() : false;
        },
        formatDate: function (date, format) {
            return moment(date).format(format);
        },
    });
    var campaignTable = $('#campaign-wrapper');
    var campaignBody = '';
    campaignArr.forEach(function (data) {
        campaignBody += '<tr>'+
                '<td><span>'+ data.date +'</span><span>'+ data.past_day +'</span></td>'+
                '<td>'+ data.campaign +'</td>'+
                '<td><span><img src="assets/dollar_icon.png" alt="view"></span></td>'+
                '<td><span><input type="text"><img src="assets/Calendar-2.png" alt="view"></span></td>'+
            +'</tr>'
    });
    campaignTable.find('tbody').append(campaignBody);
    $('#campaign-wrapper tbody td:nth-child(4) span input').datetimepicker();
    $('#campaign-wrapper tbody td:nth-child(4) span input').on('change', function () {
        if(!$(this).val())
            return;
        var tableRow = $(this).closest('tr');
        var date = $(this).val().split(' ')[0];
        $(tableRow).find('td:nth-child(1) span:nth-child(1)').text(date);
    });
});