export default function ExamResults() {
  const examResults = [
    {
      exam: 'YKS',
      year: '2023',
      result: 'Sayısal Türkiye 536.sı',
      color: 'gold',
      note: '',
    },
    {
      exam: 'LGS',
      year: '2019',
      result: 'Yüzdelik Dilim: %1,37',
      color: 'silver',
      note: '',
    },
    {
      exam: 'MSÜ',
      year: '2023',
      result: 'Sayısal 2335.',
      color: 'blue',
      note: '*hava harp tüm mülakatları başarıyla geçtim',
    },
    {
      exam: 'EPE',
      year: '2024',
      result: 'ODTÜ İngilizce Yeterlilik Sınavı: 91.5 Puan',
      color: 'bronze',
      note: '',
    },
  ]

  const getCardStyles = (color: string) => {
    switch (color) {
      case 'gold':
        return 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-2xl transform hover:scale-105'
      case 'silver':
        return 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-white shadow-xl transform hover:scale-105'
      case 'bronze':
        return 'bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white shadow-xl transform hover:scale-105'
      case 'blue':
        return 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white shadow-xl transform hover:scale-105'
      default:
        return 'bg-white text-gray-900'
    }
  }

  const courseGrades = [
    { course: 'Kalkülüs I', grade: 'AA' },
    { course: 'Kalkülüs II', grade: 'AA' },
    { course: 'Diferansiyel', grade: 'BA' },
    { course: 'Fizik I', grade: 'BA' },
    { course: 'Fizik II', grade: 'BA' },
    { course: 'ENG101', grade: 'AA' },
    { course: 'ENG102', grade: 'BA' },
    { course: 'ENG211', grade: 'AA' },
  ]

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sınav Sonuçlarım
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Akademik başarılarım ve sınav sonuçlarım
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {examResults.map((result, index) => (
            <div
              key={index}
              className={`${getCardStyles(result.color)} rounded-2xl p-6 transition-all duration-300 ${
                result.color === 'gold' ? 'md:col-span-1 md:row-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{result.exam}</h3>
                <span className="text-lg font-medium opacity-90">{result.year}</span>
              </div>
              <p className="text-lg font-semibold mb-2">{result.result}</p>
              {result.note && (
                <p className="text-xs text-white/70 italic mt-2">{result.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            ODTÜ Ders Notlarım
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {courseGrades.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-sm text-gray-600 mb-1 font-medium">{course.course}</div>
                <span
                  className={`inline-block px-3 py-1 rounded-md font-bold text-sm ${
                    course.grade === 'AA'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {course.grade}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

