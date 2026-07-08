import { motion } from "framer-motion";
import {
  FileText,
  Download,
  FileSpreadsheet,
  FileJson,
  Plus,
} from "lucide-react";
import { reports } from "../data/mockData.js";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { Table, THead, TH, TBody, TR, TD } from "../components/ui/Table.jsx";

const typeIcon = { PDF: FileText, XLSX: FileSpreadsheet, CSV: FileJson };
const typeTone = { PDF: "rose", XLSX: "teal", CSV: "amber" };

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink-100">
            Reports
          </h1>
          <p className="mt-1 text-sm text-ink-500">
            Export and share insights with your team.
          </p>
        </div>
        <Button variant="primary" icon={Plus}>
          New Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((r, i) => {
          const Icon = typeIcon[r.type];
          return (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card className="flex h-full flex-col p-5 hover:border-signal-violet/30 transition-colors">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-base-600/60 text-ink-300">
                    <Icon size={18} />
                  </span>
                  <Badge tone={typeTone[r.type]}>{r.type}</Badge>
                </div>
                <p className="mt-4 flex-1 text-sm font-semibold leading-snug text-ink-100">
                  {r.name}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-ink-700">
                  <span>{r.generated}</span>
                  <span>{r.size}</span>
                </div>
                <Button
                  variant="secondary"
                  icon={Download}
                  className="mt-4 w-full"
                >
                  Download
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Card className="p-5">
        <SectionHeader
          title="Download History"
          description="All exports from your workspace"
        />
        <Table>
          <THead>
            <tr>
              <TH>Report</TH>
              <TH>Type</TH>
              <TH>Generated</TH>
              <TH>Size</TH>
              <TH />
            </tr>
          </THead>
          <TBody>
            {reports.map((r) => (
              <TR key={r.id}>
                <TD className="font-medium text-ink-100">{r.name}</TD>
                <TD>
                  <Badge tone={typeTone[r.type]}>{r.type}</Badge>
                </TD>
                <TD>{r.generated}</TD>
                <TD>{r.size}</TD>
                <TD>
                  <button className="focus-ring rounded-lg p-2 text-ink-500 hover:bg-base-600 hover:text-ink-100">
                    <Download size={15} />
                  </button>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  );
}
