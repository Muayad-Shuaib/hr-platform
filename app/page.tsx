export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">نظام إدارة الموارد البشرية</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">الموظفين</h2>
            <p className="text-gray-600">إدارة بيانات الموظفين</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">الحضور</h2>
            <p className="text-gray-600">تتبع حضور الموظفين</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">الإجازات</h2>
            <p className="text-gray-600">إدارة طلبات الإجازات</p>
          </div>
        </div>
      </div>
    </div>
  )
}
