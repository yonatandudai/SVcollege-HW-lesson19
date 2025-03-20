שיעורי בית TS 1

מטרת הש״ב היא לחזק את ההבנה שלנו באבני הבסיס של TypeScript.

כגון type,enum,functions .

ניהול ספרים:

משימות:

1. הגדירו Type של Book: אובייקט ספר הבנוי מהערכים title , author, publishedDate, available, genre
2. בנו genre בעזרת enum היכיל לפחות 5 ז׳אנרים שונים כגון: Fiction, NonFiction, Biography, ScienceFiction, Fantasy
3. כתבו פונקציה של הוספת ספר חדש בשם addBook() , הפונקציה מקבלת מערך של ספרים ואובייקט ספר כארגיומנט. הפונקציה צריכה להוסיף את הספר החדש למערך הספרים ולהחזיר את מערך הספרים המעודכן.
4. כתבו פונקציה חיפוש בשם searchByGenre() אשר מקבלת מערך של ספרים וgenre כארגיומנט, הפונקציה תחזיר את מערך הספרים התואם את הgenre.
5. כתבו פונקציה המעדכנת את זמינות הספר, בשםupdateAvailability() שמקבלת מערך של ספרים, title, available. הפונקציה צריכה לעדכן את הזמינות של הספר התואם את הכותרת שהוכנסה כארגיומנט.

ניהול פרופיל משתמש:

משימות:

1. הגדירו interface של BaseUser הבנוי מהערכים id,username,email
2. הרחיבו את הinterface וצרו שתיים חדשים בשם GuestUser וגם RegisteredUser, לGuestUser צריך להיות עוד ערך בשם guestSessionId , ולRegisteredUser צריך להיות ערך של profile שיהיה מחרוזת, וlastLogin
3. צרו Type בשם User, הוא יכול להכיל את אחד מהinterfaceים שיצרנו כרגע
4. צרו פונקציה בשם displayUserInfo אשר מקבל User כארגיומנט ומדפיסה את הguestSessionId במידה והוכנס GuestUser, ותדפיס את הפרופיל במידה ווהכנס RegisteredUser שימו לב להשתמש בtype בצורה נכונה.
5. צרו פונקציה בשם updateUserProfile אשר מקבלת User ואובייקט עם עדכון פרופיל. הפונקציה צריכה לעדכן פרופיל של RegisteredUser עם המידע שהתקבל בפונקציה, שימו לב הפונקציה צריכה לעבוד אך ורק על RegisteredUser.
