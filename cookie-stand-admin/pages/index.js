import Head from 'next/head';
import Header from '@/components/Header';
import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';
import Footer from '@/components/Footer';

export default function Home() {
  const [reports, setReports] = useState([]);

  function addReport(newReport) {
    setReports([...reports, newReport]);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex-grow p-4 flex flex-col items-center space-y-8">
        <CreateForm onCreate={addReport} />
        <ReportTable reports={reports} />
      </main>
      <Footer />
    </div>
  );
}
