public class 한스크립트HTML {
    public static String 변환(String 코드) {
        String[][] 변환표 = {
            {"몸통", "body"},
            {"단락", "p"},
            {"큰제목", "h1"},
            {"작은제목", "h2"},
            {"단추", "button"},
            {"목록", "ul"},
            {"목록항목", "li"},
            {"연결", "a"},
            {"입력", "input"},
            {"표", "table"},
            {"줄", "tr"},
            {"칸", "td"},
            {"이미지", "img"},
            {"양식", "form"},
            {"보내기", "submit"},
            {"글상자", "textarea"},
            {"구역", "div"},
            {"범위", "span"}
        };
        
        for (String[] 변환 : 변환표) {
            코드 = 코드.replaceAll("<" + 변환[0] + "(.*?)>", "<" + 변환[1] + "$1>");
            코드 = 코드.replaceAll("</" + 변환[0] + ">", "</" + 변환[1] + ">");
        }
        
        return 코드;
    }
    
    public static void main(String[] args) {
        String 한스크립트코드 = """
        <몸통>
            <큰제목>한스크립트 예제</큰제목>
            <단락>이것은 순우리말 HTML 입니다.</단락>
            <단추>클릭하세요</단추>
        </몸통>
        """;
        
        String 변환된_HTML = 변환(한스크립트코드);
        System.out.println(변환된_HTML);
    }
}
