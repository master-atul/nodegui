#pragma once
#include "Extras/Utils/nutils.h"

#include <nodegui/core/NodeWidget/nodewidget.h>

#include <QMenuBar>

#include "QtWidgets/QWidget/qwidget_macro.h"

class DLL_EXPORT NMenuBar : public QMenuBar, public NodeWidget {
  Q_OBJECT
  NODEWIDGET_IMPLEMENTATIONS(QMenuBar)
 public:
  using QMenuBar::QMenuBar;  // inherit all constructors of QMenuBar
  void connectSignalsToEventEmitter() { QWIDGET_SIGNALS }
};
