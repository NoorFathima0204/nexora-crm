# National Geographic Mobile Performance Optimization Demo

## Digital Heroes Training Task B

A mobile performance analysis and optimization project that audits a real public website, identifies performance bottlenecks, prioritizes improvements, and demonstrates an optimized rebuild of a key section.

---

# Project Overview

This project focuses on improving mobile website performance through evidence-based optimization.

The workflow includes:

- Auditing a real publicly accessible website
- Analyzing Lighthouse performance data
- Identifying technical bottlenecks
- Prioritizing fixes based on impact and effort
- Rebuilding an optimized section as a standalone React demo
- Comparing before and after performance metrics

---

# Audited Website

**Website Audited:** National Geographic

**Audit Tool:** Google Lighthouse Mobile Audit

**Audit Type:** Mobile Performance Analysis

---

# Before Optimization Results

## Lighthouse Mobile Scores

| Category | Score |
|---|---:|
| Performance | 26 |
| Accessibility | 76 |
| Best Practices | 54 |
| SEO | 92 |

---

# Core Performance Metrics

| Metric | Result |
|---|---:|
| First Contentful Paint | 4.8s |
| Largest Contentful Paint | 19.4s |
| Total Blocking Time | 4100ms |
| Cumulative Layout Shift | 0.059 |
| Speed Index | 15.9s |

---

# Problems Identified

## 1. Excessive JavaScript Execution

Evidence:

- JavaScript execution time: 10.9s
- Unused JavaScript estimated savings: 1,496 KiB

Impact:

- Delayed interaction
- Slower responsiveness on mobile devices

---

## 2. Heavy Main Thread Processing

Evidence:

- Main thread work: 18.5s
- 20 long tasks detected

Impact:

- Browser spends too much time processing scripts
- Poor interaction experience

---

## 3. Large Network Payload

Evidence:

- Total network payload: 9,107 KiB

Impact:

- Slow loading on mobile networks
- Increased data consumption

---

## 4. Image Optimization Issues

Evidence:

- Images lacked explicit width and height attributes

Impact:

- Slower rendering
- Possible layout instability

---

# Optimization Implemented

A standalone React demo was created to demonstrate performance improvements.

Implemented optimizations:

✅ Local WebP image delivery  
✅ Lazy loading  
✅ Explicit image dimensions  
✅ Reduced page complexity  
✅ Improved semantic HTML structure  
✅ Reduced JavaScript blocking work  

---

# Before vs After Metrics

| Metric | Before | After |
|---|---:|---:|
| Performance Score | 26 | 55 |
| Largest Contentful Paint | 19.4s | 18.6s |
| Total Blocking Time | 4100ms | 20ms |
| Network Payload | 9MB | 3.3MB |

---

# Project Structure

```
Digital-Heroes-Task-B
│
├── public
│   └── images
│       └── hero.webp
│
├── src
│   │
│   ├── components
│   │   ├── BeforeSection.jsx
│   │   ├── OptimizedSection.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── documents
│   ├── Performance-Diagnosis-Report.md
│   └── Client-Summary.md
│
├── package.json
└── README.md
```

---

# Technologies Used

- React
- Vite
- JavaScript
- CSS
- Google Lighthouse

---

# Demo Features

The demo includes:

### Before Optimization Section

Represents the original performance issues:

- Heavy resource loading
- Poor optimization practices
- Large image delivery

### After Optimization Section

Demonstrates improvements:

- Optimized image loading
- Lazy loading implementation
- Better accessibility structure
- Reduced resource usage

---

# Documentation

Detailed reports are available:

- Performance Diagnosis Report
- Client-facing Summary

---

# Live Demo

(Add Vercel deployment URL here)

---

# Credit

Built for Digital Heroes Training Task
