import { Typography } from '@mui/material';
import type { StudyItem } from '../../data/types';

interface StudiesProps {
  items: StudyItem[];
}

function Studies({ items }: StudiesProps): JSX.Element {
  return (
    <section id="studies" className="scroll-mt-24 mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <Typography component="h2" className="!text-3xl !font-semibold !text-slate-50">
          Studies
        </Typography>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-800/70 to-transparent" />
      </div>

      <div className="space-y-3">
        {items.map((study) => (
          <div
            key={study.degree}
            className="rounded-xl border border-cyan-900/50 bg-slate-900/35 px-4 py-4 md:px-5"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <Typography className="!text-xl !font-semibold !text-slate-100">
                {study.degree}
              </Typography>
              <Typography className="!font-['IBM_Plex_Mono'] !text-sm !text-cyan-300">
                {study.years}
              </Typography>
            </div>
            <Typography className="!mt-1 !text-sm !text-slate-300">{study.school}</Typography>
            <Typography className="!mt-3 !leading-7 !text-slate-200">{study.details}</Typography>
            <Typography className="!mt-3 !font-medium !text-cyan-200">{study.note}</Typography>

            {(study.documents?.length || study.image) && (
              <div className="mt-3 flex flex-wrap gap-2">
                {study.documents?.map((doc) => (
                  <a
                    key={doc.href}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-cyan-800/60 bg-cyan-950/40 px-3 py-1 text-xs text-cyan-300 transition-colors hover:border-cyan-500/70 hover:bg-cyan-900/40 hover:text-cyan-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    {doc.title}
                  </a>
                ))}
                {study.image && (
                  <a
                    href={study.image.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-cyan-800/60 bg-cyan-950/40 px-3 py-1 text-xs text-cyan-300 transition-colors hover:border-cyan-500/70 hover:bg-cyan-900/40 hover:text-cyan-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    {study.image.title}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Studies;
