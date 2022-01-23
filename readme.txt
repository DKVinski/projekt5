url:

1)koristiti neki native API -> Da; VideoStream i fotografija, gumbi "Grab Video" i "Take Photo!"; /public/src/js/camera.js
2)biti installable -> Da; Ima sve karakteristike PWA, kod url trake bi trebala biti ikonica za instalaciju
3)imati barem jednu cacheing strategiju -> Da; /public/sw.js :27
4)offline rad barem za app shell -> Da; nakon instalacije u devtools/application označiti "offline-work" i kliknuti refresh - aplikacija se i dalje prikazuje, iako je offline
5)background sync -> Da; Ispisat će se poruka u konzoli; /public/sw.js :40
6)push notifikacija -> Da; aplikacija će pitati za dopuštenje prvo, kada se odobre notifikacije tada otići devtool/application/service workers i u rubriku push napisati bilo koju poruku i stisnuti gumb push, notifikcija će se pojaviti; /public/sw.js :48
7)demonstrirati barem na jednom primjeru progressive enhancement/gracefull degradation -> Da; FeatureDetection unutar /public/src/js/camera.js
