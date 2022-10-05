import pyautogui, numpy, pandas, openpyxl, time, pyperclip

#Passo 1: Entrar no sistema da empresa.
pyautogui.press("win")  #apertar apenas 1 tecla.
time.sleep(2)
pyautogui.write("chrome")  #escrever um texto.
time.sleep(2)
pyautogui.press("enter")
time.sleep(2)
pyperclip.copy("https://drive.google.com/drive/folders/149xknr9JvrlEnhNWO49zPcw0PW5icxga")
pyautogui.hotkey("ctrl", "v")
pyautogui.press("enter")

#Passo 2: Navegar no sistema e encontrar a base de vendas.
##pyautogui.displayMousePosition
time.sleep(3)
pyautogui.click(x=1774, y=282, clicks=2) 

#Passo 3: Dowload da base de vendas.
time.sleep(3)
pyautogui.click(x=2041, y=173, clicks=1) #clicando nos tres pontinhos.
time.sleep(3)
pyautogui.click(x=2065, y=555, clicks=1) #clicando no fazer dowload.
time.sleep(5) #esperar o dowload acabar.

#Passo 4: Importar a base de vendas pro Python.
tabela = pandas.read_excel(r"C:\Users\gusta\Downloads\Vendas - Dez.xlsx")  #r usa-se para ler o texto cru.
print(tabela)

#Passo 5: Calcular os indicadores da empresa.
time.sleep(3)
faturamento = tabela["Valor Final"].sum()
print(faturamento)
time.sleep(3)
quantidade = tabela["Quantidade"].sum()
print(quantidade)

#Passo 6: Enviar um e-mail para a diretoria com os indicadores de venda.
time.sleep(2)
pyautogui.press("win")
time.sleep(1)
pyautogui.write("chrome")  #escrever um texto.
time.sleep(2)
pyautogui.press("enter")
time.sleep(1)
pyperclip.copy("https://mail.google.com/mail/u/0/#inbox")
pyautogui.hotkey("ctrl", "v")
pyautogui.press("enter")
time.sleep(3)
pyautogui.click(x=1450, y=176, clicks=2) 
time.sleep(5)
pyautogui.write("gustavo.monteirosenai26@gmail.com")
pyautogui.press("enter")
time.sleep(3)
pyautogui.press("tab") #pular para o campo de assunto.

pyperclip.copy("Relatório de Vendas")  #usamos COPY, pois temos caracteres especiais.
pyautogui.hotkey("ctrl", "v")

pyautogui.press("tab") #pular para o campo de corpo de email.

time.sleep(2)

texto = f"""  
    Prezados,

    Segue relatório de vendas.
    Faturamento: {faturamento:,.2f} 
    Quantidade de produtos vendidos: {quantidade:,}

    Qualquer dúvida estou à disposição.
    Att, 
    Gustavo.
"""
pyperclip.copy(texto)
pyautogui.hotkey("ctrl", "v")

time.sleep(2)

#enviar o e-mail.
pyautogui.hotkey("ctrl", "enter")