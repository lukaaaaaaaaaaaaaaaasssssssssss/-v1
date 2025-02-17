import re

def 한스크립트_변환(코드):
    변환표 = {
        "몸통": "body",
        "단락": "p",
        "큰제목": "h1",
        "작은제목": "h2",
        "단추": "button",
        "목록": "ul",
        "목록항목": "li",
        "연결": "a",
        "입력": "input",
        "표": "table",
        "줄": "tr",
        "칸": "td",
        "이미지": "img",
        "양식": "form",
        "보내기": "submit",
        "글상자": "textarea",
        "구역": "div",
        "범위": "span"
    }
    
    for 한글, 영어 in 변환표.items():
        코드 = re.sub(f'<{한글}([^>]*)>', f'<{영어}\1>', 코드)
        코드 = re.sub(f'</{한글}>', f'</{영어}>', 코드)
    
    return 코드

class 한스크립트:
    def __init__(self):
        self.값바꿈들 = {}
    
    def 값바꿈(self, 이름, 값):
        self.값바꿈들[이름] = 값
    
    def 보여주기(self, *값들):
        다듬은값들 = [str(값) for 값 in 값들]
        print("보여주기:", *다듬은값들)
    
    def 만약(self, 조건, 할일, 그렇지않으면=None):
        if 조건:
            할일()
        elif 그렇지않으면:
            그렇지않으면()
    
    def 되풀이하기(self, 횟수, 할일):
        for i in range(횟수):
            할일(i)
    
    def 목록(self, *요소들):
        return list(요소들)
    
    def 대상만들기(self, **속성):
        return 속성
    
    def 대응목록(self):
        return {}
    
    def 모음(self):
        return set()
    
    def 틀설정(self, 대상, 본틀):
        대상.__class__ = 본틀
    
    def 나중실행함수(self, 할일):
        import threading
        threading.Timer(0, 할일).start()
    
    async def 나중실행하기(self, 할일):
        import asyncio
        await asyncio.sleep(0)
        await 할일()

한스크립트_엔진 = 한스크립트()
