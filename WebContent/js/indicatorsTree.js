//��ȡindicators.xml���� �� ���ɵ�����
$(document).ready(
    function () {
        $.ajax({
            url: 'xml/indicators.xml',
            type: 'GET',
            dataType: 'xml',
            timeout: 1000,  //�趨��ʱ
            cache: false,   //���û���
            error: function (xml1) {
                alert("����XML�ĵ�����!");
            },
            success: GetIndicators   //���óɹ���ص�����
        });
        function GetIndicators(xml1) {
            $(xml1).find("indicator").each(function (i) {
                var indicator_name = $(this).text();
                var indicator_about = $(this).attr("about");
                //  alert(indicator_name);
                $("<p class='indicatorName'><div class='triangle-indicators'></div><a href='#'>" + indicator_name + "</a></p>").appendTo("#guideTree_left").on("click", function () {
                    $("#guideTree_right").empty();
                    $("<p class='indicatorAbout_header'>" + indicator_name + "</p><hr /><p class='indicatorAbout'>" + indicator_about + "</p>").appendTo("#guideTree_right");
                });
            });
        }
    }
);

